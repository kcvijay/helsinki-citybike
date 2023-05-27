import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Show all stations

interface AllStationParams {
  limit: number;
  skip: number;
}

export const showAllStations = createAsyncThunk(
  "stations/showAll",
  async ({ limit, skip }: AllStationParams) => {
    const response = await axios.get(
      `https://hkl-citybike.onrender.com/api/stations?limit=${limit}&offset=${skip}`,
      {}
    );
    return response.data;
  }
);

// Show a single station

export const showSingleStation = createAsyncThunk(
  "stations/showOne",
  async (id: string) => {
    const response = await axios.get(
      `https://hkl-citybike.onrender.com/api/stations/${id}`,
      {}
    );
    return response.data;
  }
);

export const showTopStations = createAsyncThunk(
  "stations/showTop5",
  async (stationId: string) => {
    const response = await axios.get(
      `https://hkl-citybike.onrender.com/api/stations/${stationId}/top-stations`,
      {}
    );
    return response.data;
  }
);
