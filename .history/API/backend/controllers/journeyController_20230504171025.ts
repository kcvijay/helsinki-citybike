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
    const limit = (req.query.limit as number | undefined) || 25;
    const offset = (req.query.offset as number | undefined) || 0; // Default offset as 0.
    const page = (req.query.page as number | undefined) || 1; // Default page 1
    const perPage = (req.query.perPage as number | undefined) || 25; // Default per page 25 data/page
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

    // Access single data based on station_id from both journeys & stations.
    let filter: any;
    if (mongoose.Types.ObjectId) {
      filter = {
        $or: [
          { id: req.params.id },
          { station_id: req.params.stationid },
          { dep_station_id: req.params.stationid },
        ],
      };
    } else {
      res.status(400);
      console.log(`${filter} is not a valid ID.`);
    }

    const data = await collection.findOne(filter).exec();

    if (!data || data === undefined) {
      res.status(404);
      console.log("data not found.");
      return;
    }
    res.status(200).json(data);
  }
);

module.exports = { getAllData, getData };
