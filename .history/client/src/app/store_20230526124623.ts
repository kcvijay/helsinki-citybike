import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import journeysReducer from "../features/journeys/journeysSlice";
import stationsReducer from "../features/stations/stationsSlice";

interface journeyData {
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

export const store = configureStore({
  reducer: {
    journeys: journeysReducer,
    stations: stationsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState> & {
  journeys: {
    allJourneyData: journeyData[];
  };
};
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
