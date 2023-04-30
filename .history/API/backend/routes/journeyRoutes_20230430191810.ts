const express = require("express");
import {req, res} from

const router = express.Router();

const { getAllData, getData } = require("../controllers/journeyController");

router.route("/").get((req, res) => getAllData(req, res, "Journey"));
router.route("/:id").get((req, res) => getData(req, res, "Journey"));

module.exports = router;
