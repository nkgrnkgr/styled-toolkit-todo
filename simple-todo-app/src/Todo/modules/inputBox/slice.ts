import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InputBoxState {
  text: string;
}

const initialState: InputBoxState = {
  text: "",
};

export const { actions, reducer, name } = createSlice({
  name: "inputBox",
  initialState,
  reducers: {
    changeText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    clearText: (state) => {
      state.text = "";
    },
  },
});
