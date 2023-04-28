const express = require("express");

const router = express.Router();

const { getAllData } = require("../controllers/actionController");

router.route("/").get(getAllData);

module.exports = router;
