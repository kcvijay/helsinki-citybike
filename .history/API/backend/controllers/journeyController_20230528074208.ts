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

    // Switching between two collections
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

    if (collectionName === "stations") {
      const stationId = req.params.stationid;

      //Calculating total of departure and return journeys for specific stations
      const totalDepartureJourneys = await Journey.countDocuments({
        departure_station_id: stationId,
      });
      const totalReturnJourneys = await Journey.countDocuments({
        return_station_id: stationId,
      });

      // Calculating total departure and return duration for that station
      const totalDepartureTime = await Journey.aggregate([
        { $match: { departure_station_id: stationId } },
        { $group: { _id: null, total: { $sum: "$duration" } } },
      ]);

      const totalReturnTime = await Journey.aggregate([
        { $match: { return_station_id: stationId } },
        { $group: { _id: null, total: { $sum: "$duration" } } },
      ]);

      // Calculating average departure and return duration for that station
      const averageDepartureDuration = Math.floor(
        totalDepartureTime[0].total / totalDepartureJourneys
      );
      const averageReturnDuration = Math.floor(
        totalReturnTime[0].total / totalReturnJourneys
      );

      // Implementing on query
      const responseData = {
        ...data.toObject(),
        total_departure_journeys: totalDepartureJourneys,
        total_return_journeys: totalReturnJourneys,
        average_departure_duration: averageDepartureDuration,
        average_return_duration: averageReturnDuration,
      };
      res.status(200).json(responseData);
    } else {
      res.status(200).json(data);
    }
  }
);

const getTopStations = asyncHandler(async (req: Request, res: Response) => {
  const stationId = req.params.stationid;

  // Calculating the list of top 5 departure and return stations.
  try {
    const result = await Journey.aggregate([
      {
        $facet: {
          topDepartureStations: [
            { $match: { return_station_id: stationId } },
            { $group: { _id: "$departure_station_id", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 5 },
            {
              $lookup: {
                from: "stations",
                localField: "_id",
                foreignField: "station_id",
                as: "station_details",
              },
            },
            {
              $project: {
                _id: 0,
                station_id: "$_id",
                count: 1,
                station_name: { $arrayElemAt: ["$station_details.name", 0] },
                station_address: {
                  $arrayElemAt: ["$station_details.address", 0],
                },
              },
            },
          ],
          topReturnStations: [
            { $match: { departure_station_id: stationId } },
            { $group: { _id: "$return_station_id", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 5 },
            {
              $lookup: {
                from: "stations",
                localField: "_id",
                foreignField: "station_id",
                as: "station_details",
              },
            },
            {
              $project: {
                _id: 0,
                station_id: "$_id",
                count: 1,
                station_name: { $arrayElemAt: ["$station_details.name", 0] },
                station_address: {
                  $arrayElemAt: ["$station_details.address", 0],
                },
              },
            },
          ],
        },
      },
    ]).exec();

    const topDepartureStations = result[0].topDepartureStations;
    const topReturnStations = result[0].topReturnStations;

    res.status(200).json({ topDepartureStations, topReturnStations });
  } catch (error) {
    console.error("Error retrieving top stations:", error);
    res.status(500).send({ error: 500, message: "Internal Server Error" });
  }
});

module.exports = {
  getAllData,
  getData,
  getTopStations,
};
