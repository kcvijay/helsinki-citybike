const express = require("express");

const router = express.Router();

const { getAllData, getData } = require("../controllers/journeyController");

router.route("/").get(getAllData("Journey"));
router.route("/:id").get(getData("Journey"));

module.exports = router;
