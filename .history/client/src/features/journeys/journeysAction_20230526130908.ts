import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Show all journeys

interface showAllJourneyParams {
  limit: number;
  skip: number;
}

interface idParams {
  id: string;
}

export const showAllJourneys = createAsyncThunk(
  "journeys/showAll",
  async ({ limit, skip }: showAllJourneyParams) => {
    const response = await axios.get(
      `http://localhost:4000/api/journeys?limit=${limit}&offset=${skip}`,
      {}
    );
    return response.data;
  }
);

// Show a single journey

export const showSingleJourney = createAsyncThunk(
  "journeys/showOne",
  async (id) => {
    const response = await axios.get(
      `http://localhost:4000/api/journeys/${id}`,
      {}
    );
    return response.data;
  }
);
