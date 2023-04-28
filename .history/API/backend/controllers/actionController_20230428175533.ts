import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
const Journey = require("../schema/dataSchema");

const getAllData = asyncHandler(async (req: Request, res: Response) => {
  const data = await Journey.find();
  res.status(200).json(data);
});

module.exports = getAllData;
