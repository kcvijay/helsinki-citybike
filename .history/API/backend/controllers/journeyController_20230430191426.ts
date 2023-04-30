import { Request, Response } from "express";
const { Journey, Station } = require("../schema/mongooseSchema");
import mongoose from "mongoose";

const asyncHandler = require("express-async-handler");

const getAllData = asyncHandler(
  async (req: Request, res: Response, collectionName: string) => {
    let collection: any;
    switch (collectionName) {
      case "Journey":
        collection = Journey;
        break;
      case "Station":
        collection = Station;
        break;
      default:
        throw new Error(`Collection ${collectionName} does not exist.`);
    }
    const limit = req.query.limit;
    const data = await collection.find().limit(limit);
    res.status(200).json(data);
  }
);

const getData = asyncHandler(
  async (req: Request, res: Response, collectionName: string) => {
    let collection: any;
    switch (collectionName) {
      case "collection1":
        collection = Journey;
        break;
      case "collection2":
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
