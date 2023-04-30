const express = require("express");
import { Request, Response } from "express";

const router = express.Router();

const { getAllData, getData } = require("../controllers/journeyController");

// Different routes for different "journeys" and "stations" collections.

router
  .route("/")
  .get((req: Request, res: Response) => getAllData(req, res, "journeys"));
router
  .route("/:id")
  .get((req: Request, res: Response) => getData(req, res, "journeys"));

module.exports = router;
