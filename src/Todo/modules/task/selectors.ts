import { TaskState } from "./slice";
import { VisibilityFilterState } from "../visibilityFIlter";
import { createSelector } from "@reduxjs/toolkit";

const items = (state: TaskState) => state.items;
const selectedStatus = (state: VisibilityFilterState) => state.selectedStatus;
export const filterdItemSelector = createSelector(
  [items, selectedStatus],
  (items, selectedStatus) => {
    switch (selectedStatus) {
      case "Active":
        return items.filter((item) => !item.completed);
      case "Completed":
        return items.filter((item) => item.completed);
      default:
        return items;
    }
  }
);
