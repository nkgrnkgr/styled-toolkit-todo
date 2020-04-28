import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Action } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type AppThunk<R = void> = ThunkAction<
  R,
  RootState,
  null,
  Action<string>
>;

export type AppDispatch = ThunkDispatch<RootState, null, Action<string>>;
