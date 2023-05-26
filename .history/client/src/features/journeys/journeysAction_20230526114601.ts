import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Show all journeys

export const showAllJourneys = createAsyncThunk(
  "journeys/showAll",
  async (limit, skip) => {
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
