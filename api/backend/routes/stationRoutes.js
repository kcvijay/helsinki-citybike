"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const { getAllData, getData, getTopStations, } = require("../controllers/journeyController");
// routes for stations collection
router
    .route("/")
    .get((req, res) => getAllData(req, res, "stations"));
router
    .route("/:stationid")
    .get((req, res) => getData(req, res, "stations"));
router
    .route("/:stationid/top-stations")
    .get((req, res) => getTopStations(req, res, "stations"));
module.exports = router;
