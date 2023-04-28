import mongoose from "mongoose";
import { Schema } from "mongoose";

const journeySchema = new Schema({
  Departure: {
    type: String,
  },
  Return: {
    type: String,
  },
  Departure_station_id: {
    type: String,
  },
  Departure_Station_name: {
    type: String,
  },
  Return_station_id: {
    type: String,
  },
});
