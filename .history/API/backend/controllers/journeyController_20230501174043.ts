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
    const limit = (req.query.limit as number | undefined) || 100; // Default limit is 100 unless otherwise defined in query.
    const offset = (req.query.offset as number | undefined) || 0; // Default offset as 0.
    const data = await collection.find().limit(limit).offset(offset);
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
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400);
      console.log(`${req.params.id} is not a valid ID.`);
    }

    const data = await collection.findById(req.params.id);

    if (!data) {
      res.status(404);
      console.log("data not found.");
    }
    res.status(200).json(data);
  }
);

module.exports = { getAllData, getData };
