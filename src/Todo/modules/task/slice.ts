import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Props as ItemProps } from "../../components/Task/Item";

export interface TaskState {
  items: ItemProps[];
}

const initialState: TaskState = {
  items: [],
};

export const { actions, reducer, name } = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ItemProps>) => {
      state.items.push(action.payload);
    },
  },
});
