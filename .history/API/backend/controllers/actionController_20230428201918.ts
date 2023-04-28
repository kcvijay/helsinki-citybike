import { Request, Response } from "express";
import mongoose from "mongoose";

const asyncHandler = require("express-async-handler");
const Journey = require("../schema/dataSchema");

const getAllData = asyncHandler(async (req: Request, res: Response) => {
  const data = await Journey.find();
  res.status(200).json(data);
});

const getData = asyncHandler(async (req: Request, res: Response) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400);
    console.log(`${req.params.id} is not a valid ID.`);
  }

  const journey = await Journey.findById(req.params.id);

  if (!journey) {
    res.status(404);
    console.log("Journey not found.");
  }
  res.status(200).json(journey);
});

module.exports = { getAllData, getData };
