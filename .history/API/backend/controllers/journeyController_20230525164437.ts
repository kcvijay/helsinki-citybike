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

const getTopReturnStation = asyncHandler(
  async (req: Request, res: Response) => {
    const stationId = req.params.stationId;

    const matchState = { $match: { departure_station_id: stationId } };

    const groupState = {
      $group: {
        _id: "$return_station_id",
        count: { $sum: 1 },
      },
    };
  }
);
module.exports = { getAllData, getData };
