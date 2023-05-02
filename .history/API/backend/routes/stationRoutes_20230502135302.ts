const express = require("express");
import { Request, Response } from "express";

const router = express.Router();

const { getAllData, getData } = require("../controllers/journeyController");

// routes for stations collection

router
  .route("/")
  .get((req: Request, res: Response) => getAllData(req, res, "stations"));
// router
//   .route("/:id")
//   .get((req: Request, res: Response) => getData(req, res, "stations"));

module.exports = router;
