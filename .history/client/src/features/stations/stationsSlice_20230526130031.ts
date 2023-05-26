import { createSlice } from "@reduxjs/toolkit";
import { showAllStations, showSingleStation } from "./stationsAction";

export const stationsSlice = createSlice({
  name: "stations",
  initialState: {
    loading: false,
    success: false,
    allStationsData: [],
    stationData: [],
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(showAllStations.pending, (state) => {
        state.loading = true;
      })
      .addCase(showAllStations.fulfilled, (state, action) => {
        state.loading = false;
        state.allStationsData = action.payload;
        state.success = true;
      })
      .addCase(showSingleStation.pending, (state) => {
        state.loading = true;
      })
      .addCase(showSingleStation.fulfilled, (state, action) => {
        state.loading = false;
        state.stationData = action.payload;
        state.success = true;
      });
  },
});

export default stationsSlice.reducer;
