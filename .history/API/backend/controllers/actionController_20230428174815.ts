import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { findSourceMap } from "module";
import mongoose from "mongoose";

const getAllData = asyncHandler(async (req: Request, res: Response) => {
    const data = await 
})
