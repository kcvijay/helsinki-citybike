import { createSlice } from "@reduxjs/toolkit";
import { showAllJourneys } from "./journeysAction";
import { showSingleJourney } from "./journeysAction";

export const journeysSlice = createSlice({
  name: "journeys",
  initialState: {
    loading: false,
    success: false,
    allJourneysData: [],
    journeyData: [],
  },
  reducers: {},
});
