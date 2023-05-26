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

  extraReducers: (builder) => {
    builder
      .addCase(showAllJourneys.pending, (state) => {
        state.loading = true;
      })
      .addCase(showSingleJourney.fulfilled, (state, action) => {
        state.loading = false;
        state.allJourneysData = action.payload;
        state.success = true;
      })
      .addCase(showSingleJourney.pending, (state) => {
        state.loading = true;
      })
      .addCase(showSingleJourney.fulfilled, (state, action) => {
        state.loading = false;
        state.journeyData = action.payload;
        state.success = true;
      });
  },
});

export default journeysSlice.reducer;
