import mongoose from "mongoose";
import { Schema } from "mongoose";

const journeySchema = new Schema({
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

const Journey = mongoose.model("Journey", journeySchema);
module.exports = Journey;
