import { createSlice } from "@reduxjs/toolkit";
import { showAllJourneys } from "./journeysAction";
import { showSingleJourney } from "./journeysAction";

interface JourneyData {
    _id: string;
    departure_station_name: string;
    departure_station_id: string;
    departure: Date;
    return_station_name: string;
    return_station_id: string;
    return: Date;
    covered_distance: number;
    duration: number;
}
  
interface JourneyState {
    loading: boolean;
    success: boolean;
    allJourneyData: JourneyData[];
    journeyData: JourneyData[]
}

export const journeysSlice = createSlice({
  name: "journeys",
  initialState: {
    loading: false,
    success: false,
    allJourneysData: JourneyData[],
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
