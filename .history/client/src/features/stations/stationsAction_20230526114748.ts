import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Show all stations

export const showAllStations = createAsyncThunk(
  "journeys/showAll",
  async (limit, skip) => {
    const response = await axios.get(
      `http://localhost:4000/api/stations?limit=${limit}&offset=${skip}`,
      {}
    );
    return response.data;
  }
);

// Show a single station

export const showSingleStation = createAsyncThunk(
  "journeys/showOne",
  async (id) => {
    const response = await axios.get(
      `http://localhost:4000/api/stations/${id}`,
      {}
    );
    return response.data;
  }
);
