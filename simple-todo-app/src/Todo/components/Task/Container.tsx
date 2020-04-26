import { createSelector } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules/store";
import { operations, TaskState } from "../../modules/task";
import { AppDispatch } from "../../modules/types";
import { VisibilityFilterState } from "../../modules/visibilityFIlter";
import Task from "./Task";

const Container = () => {
  const dispatch = useDispatch<AppDispatch>();
  const state = useSelector<RootState, TaskState & VisibilityFilterState>(
    (state) => ({
      ...state.task,
      ...state.visibilityFilter,
    })
  );
  const items = (state: TaskState) => state.items;
  const selectedStatus = (state: VisibilityFilterState) => state.selectedStatus;
  const filterdItemSelector = createSelector(
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

  const props = {
    items: filterdItemSelector(state),
    onClickItem: (id: number) => {
      dispatch(operations.changeState(id));
    },
  };

  return <Task {...props} />;
};

export default Container;
