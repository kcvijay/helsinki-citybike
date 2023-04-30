const express = require("express");

const router = express.Router();

const { getAllData, getData } = require("../controllers/stationController");

router.route("/").get(getAllData);
router.route("/:id").get(getData);

module.exports = router;
