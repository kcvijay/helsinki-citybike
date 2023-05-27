import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Show all journeys

interface showAllJourneyParams {
  limit: number;
  skip: number;
}

export const showAllJourneys = createAsyncThunk(
  "journeys/showAll",
  async ({ limit, skip }: showAllJourneyParams) => {
    const response = await axios.get(
      `https://hkl-citybike.onrender.com/api/journeys?limit=${limit}&offset=${skip}`,
      {}
    );
    return response.data;
  }
);

// Show a single journey

export const showSingleJourney = createAsyncThunk(
  "journeys/showOne",
  async (id: string) => {
    const response = await axios.get(
      `https://hkl-citybike.onrender.com/api/journeys/${id}`,
      {}
    );
    return response.data;
  }
);
