import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type VisibilityFilterStatus = "ALL" | "Active" | "Completed";

export interface VisibilityFilterState {
  selectedStatus: VisibilityFilterStatus;
}

const initialState: VisibilityFilterState = {
  selectedStatus: "ALL",
};

export const { actions, reducer, name } = createSlice({
  name: "visibilityFilter",
  initialState,
  reducers: {
    changeSelectedStatus: (state, action: PayloadAction<VisibilityFilterStatus>) => {
      state.selectedStatus = action.payload;
    },
  },
});
