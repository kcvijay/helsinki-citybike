import { createSlice } from "@reduxjs/toolkit";
import {
  showAllStations,
  showSingleStation,
  showTopStations,
} from "./stationsAction";

interface StationData {
  Adress: string;
  _id: string;
  Nimi: string;
  Namn: string;
  Stad: string;
  address: string;
  capacity: number;
  city: string;
  name: string;
  operator: string;
  station_id: string;
  x: string;
  y: string;
  total_departure_journeys: number;
  total_return_journeys: number;
}

interface TopStation {
  count: number;
  station_id: string;
  station_name: string;
  station_address: string;
}

interface TopStationsData {
  topDepartureStations: TopStation[];
  topReturnStations: TopStation[];
}

interface StationState {
  loading: boolean;
  success: boolean;
  allStationData: StationData[];
  stationData: StationData | null;
  topStations: TopStationsData | null;
  departureStationData: StationData | null;
  returnStationData: StationData | null;
}

const initialState: StationState = {
  loading: false,
  success: false,
  allStationData: [],
  stationData: null,
  topStations: null,
  departureStationData: null,
  returnStationData: null,
};

export const stationsSlice = createSlice({
  name: "stations",
  initialState: initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(showAllStations.pending, (state) => {
        state.loading = true;
      })
      .addCase(showAllStations.fulfilled, (state, action) => {
        state.loading = false;
        state.allStationData = action.payload;
        state.success = true;
      })
      .addCase(showSingleStation.pending, (state) => {
        state.loading = true;
      })
      .addCase(showSingleStation.fulfilled, (state, action) => {
        state.loading = false;
        state.stationData = action.payload;
        state.success = true;
      })
      .addCase(showTopStations.pending, (state) => {
        state.loading = true;
      })
      .addCase(showTopStations.fulfilled, (state, action) => {
        state.loading = false;
        state.topStations = action.payload;
        state.success = true;
      })
      .addCase(showSingleStation.fulfilled, (state, action) => {
        const { departureStationData, returnStationData } = action.payload;
        state.loading = false;
        state.departureStationData = departureStationData;
        state.returnStationData = returnStationData;
        state.success = true;
      });
  },
});

export default stationsSlice.reducer;
