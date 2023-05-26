import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const stationsReducer = createSlice({
  name: "stations",
  initialState: {
    loading: false,
    success: false,
    allStationsData: [],
    stationData: [],
  },
  reducers: {},
});
