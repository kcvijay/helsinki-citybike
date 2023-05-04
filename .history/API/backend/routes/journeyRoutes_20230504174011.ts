const express = require("express");
import { Request, Response } from "express";

const router = express.Router();

const { getAllData, getData } = require("../controllers/journeyController");

// routes for different "journeys" collections.

router
  .route("/")
  .get((req: Request, res: Response) => getAllData(req, res, "journeys"));
router
  .route("/:journeyid")
  .get((req: Request, res: Response) => getData(req, res, "journeys"));

module.exports = router;
