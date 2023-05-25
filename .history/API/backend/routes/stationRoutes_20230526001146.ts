const express = require("express");
import { Request, Response } from "express";

const router = express.Router();

const {
  getAllData,
  getData,
  getTopStations,
} = require("../controllers/journeyController");

// routes for stations collection

router
  .route("/")
  .get((req: Request, res: Response) => getAllData(req, res, "stations"));
router
  .route("/:stationid")
  .get((req: Request, res: Response) => getData(req, res, "stations"));
router
  .route("/:stationid/top-stations")
  .get((req: Request, res: Response) => getTopStations(req, res, "stations"));

module.exports = router;
