import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import journeysReducer from "../features/journeys/journeysSlice";
import stationsReducer from "../features/stations/stationsSlice";

export const store = configureStore({
  reducer: {
    journeys: journeysReducer,
    stations: stationsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
