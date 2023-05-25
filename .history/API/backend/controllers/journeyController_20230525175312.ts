import { Request, Response } from "express";
const { Journey, Station } = require("../schema/mongooseSchema");
import mongoose from "mongoose";

const asyncHandler = require("express-async-handler");

// Switching between "journeys" and "stations" collections as they're in different collections.

const getAllData = asyncHandler(
  async (req: Request, res: Response, collectionName: string) => {
    let collection: any;
    switch (collectionName) {
      case "journeys":
        collection = Journey;
        break;
      case "stations":
        collection = Station;
        break;
      default:
        throw new Error(`Collection ${collectionName} does not exist.`);
    }
    const limit = req.query.limit as string | undefined;
    const skip = req.query.offset as string | undefined; // Default offset as 0.
    const data = await collection.find().skip(skip).limit(limit);
    res.status(200).json(data);
  }
);

const getData = asyncHandler(
  async (req: Request, res: Response, collectionName: string) => {
    let collection: any;
    let filter: any;

    switch (collectionName) {
      case "journeys":
        collection = Journey;
        if (mongoose.Types.ObjectId.isValid(req.params.id)) {
          filter = { _id: req.params.id };
        } else {
          console.log("ID is not valid.");
          return res
            .status(400)
            .send({ error: 400, message: "ID is not valid." });
        }
        break;
      case "stations":
        collection = Station;
        filter = { station_id: req.params.stationid };
        break;
      default:
        throw new Error(`Collection ${collectionName} does not exist.`);
    }

    const data = await collection.findOne(filter).exec();

    if (!data || data === undefined) {
      res.status(404);
      console.log("Data not found.");
      return;
    }

    res.status(200).json(data);
  }
);

// const getTopReturnStations = asyncHandler(
//   async (req: Request, res: Response) => {
//     const stationId = req.params.stationId;

//     const matchStage = { $match: { departure_station_id: stationId } };

//     const groupStage = {
//       $group: {
//         _id: "$return_station_id",
//         count: { $sum: 1 },
//       },
//     };

//     const sortStage = {
//       $sort: { count: -1 },
//     };

//     const limitStage = {
//       $limit: 5,
//     };

//     const lookupStage = {
//       $lookup: {
//         from: "stations",
//         localField: "_id",
//         foreignField: "station_id",
//         as: "station_details",
//       },
//     };

//     const projectStage = {
//       $project: {
//         _id: 0,
//         return_station_id: "$_id",
//         count: 1,
//         return_station_name: { $arrayElemAt: ["$station_details.name", 0] },
//         return_station_address: {
//           $arrayElemAt: ["$station_details.address", 0],
//         },
//         return_station_city: { $arrayElemAt: ["$station_details.city", 0] },
//       },
//     };
//     const pipeline = [
//       matchStage,
//       groupStage,
//       sortStage,
//       limitStage,
//       lookupStage,
//       projectStage,
//     ];
//     try {
//       const result = await Journey.aggregate(pipeline).exec();
//       res.status(200).json(result);
//     } catch (error) {
//       console.log(error);
//       res.status(500).send({ error: 500, message: "Internal server error." });
//     }
//   }
// );

const getTopReturnStations = asyncHandler(
  async (req: Request, res: Response) => {
    const stationId = req.params.stationid;

    try {
      const journeys = await Journey.find().exec();

      const filteredJourneys = journeys.filter(
        (journey: any) => journey.departure_station_id === stationId
      );

      const stationCounts = {};

      filteredJourneys.map((journey: any) => {
        const returnStationId = journey.return_station_id;

        if (stationCounts[returnStationId]) {
          stationCounts[returnStationId]++;
        } else {
          stationCounts[returnStationId] = 1;
        }
      });

      const sortedReturnStation = Object.entries(stationCounts)
        .sort((a, b) => (b[1] as number) - (a[1] as number))
        .slice(0, 5)
        .map(([returnStationId, count]) => returnStationId);

      const returnStations = await Station.find({
        station_id: { $in: sortedReturnStation },
      }).exec();

      res.status(200).json(returnStations);
    } catch (error) {
      console.error("Error retrieving top return stations:", error);
      res.status(500).send({ error: 500, message: "Internal Server Error" });
    }
  }
);
module.exports = { getAllData, getData, getTopReturnStations };
