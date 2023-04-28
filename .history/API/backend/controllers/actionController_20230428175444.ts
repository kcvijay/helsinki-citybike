import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
const Journey = require("../schema/dataSchema");

const getAllData = asyncHandler(async (req: Request, res: Response) => {
  const data = await Journey.find();
});
