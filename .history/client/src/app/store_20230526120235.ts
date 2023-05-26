import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import journeysReducer from "../features/journeys/journeysSlice";

export const store = configureStore({
  reducer: {
    journeys: journeysReducer,
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
