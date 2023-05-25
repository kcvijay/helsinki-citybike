const express = require("express");
import { Request, Response } from "express";

const router = express.Router();

const {
  getAllData,
  getData,
  getTopReturnStations,
} = require("../controllers/journeyController");

// routes for different "journeys" collections.

router
  .route("/")
  .get((req: Request, res: Response) => getAllData(req, res, "journeys"));
router
  .route("/:id")
  .get((req: Request, res: Response) => getData(req, res, "journeys"));

router
  .route("/:id/top-return-stations")
  .get((req: Request, res: Response) =>
    getTopReturnStations(req, res, "journeys")
  );

module.exports = router;
