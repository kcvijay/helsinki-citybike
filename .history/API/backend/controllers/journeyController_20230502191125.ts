import e, { Request, Response } from "express";
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
    const limit = req.query.limit as number | undefined;
    const offset = (req.query.offset as number | undefined) || 0; // Default offset as 0.
    const data = await collection.find().skip(offset).limit(limit);
    res.status(200).json(data);
  }
);

const getData = asyncHandler(
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

    let filter: any;
    if (mongoose.Types.ObjectId) {
      filter = {
        $or: [
          { station_id: req.params.stationid },
          { dep_station_id: req.params.stationid },
        ],
      };
    } else {
      res.status(400);
      console.log(`${req.params.stationid} is not a valid ID.`)

    const data = await collection.findOne(filter);

    if (!data || data.length === 0) {
      res.status(404);
      console.log("data not found.");
      return;
    }
    res.status(200).json(data);
  }
);

module.exports = { getAllData, getData };
