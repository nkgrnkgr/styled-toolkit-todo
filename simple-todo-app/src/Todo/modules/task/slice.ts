import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ItemModel } from "../../components/Task/Item";

export interface TaskState {
  items: ItemModel[];
}

const initialState: TaskState = {
  items: [],
};

export const { actions, reducer, name } = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ItemModel>) => {
      state.items.push(action.payload);
    },
    changeState: (
      state,
      action: PayloadAction<number>
    ) => {
      const found = state.items.find(item => item.id === action.payload)
      if (found) {
        found.completed = !found.completed
      }
    },
  },
});
