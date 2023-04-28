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
});
