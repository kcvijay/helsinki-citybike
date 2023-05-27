"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const { getAllData, getData } = require("../controllers/journeyController");
// routes for different "journeys" collections.
router
    .route("/")
    .get((req, res) => getAllData(req, res, "journeys"));
router
    .route("/:id")
    .get((req, res) => getData(req, res, "journeys"));
module.exports = router;
