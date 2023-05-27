"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const journeySchema = new mongoose_2.Schema({
    departure: {
        type: Date,
    },
    return: {
        type: Date,
    },
    departure_station_id: {
        type: String,
    },
    departure_station_name: {
        type: String,
    },
    return_station_id: {
        type: String,
    },
    return_station_name: {
        type: String,
    },
    covered_distance: {
        type: Number,
    },
    duration: {
        type: Number,
    },
});
const stationSchema = new mongoose_2.Schema({
    name: {
        type: String,
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    capacity: {
        type: Number,
    },
    operator: {
        type: String,
    },
    x: {
        type: String,
    },
    y: {
        type: String,
    },
});
module.exports = {
    Journey: mongoose_1.default.model("journeys", journeySchema),
    Station: mongoose_1.default.model("stations", stationSchema),
};
