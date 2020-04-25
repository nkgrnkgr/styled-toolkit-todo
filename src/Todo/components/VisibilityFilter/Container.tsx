import React from "react";
import VisibilityFilter, { Props } from "./VisibilityFilter";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../modules/store";
import {
  VisibilityFilterStatus,
  operations,
} from "../../modules/visibilityFIlter";
import { AppDispatch } from "../../modules/types";

const Container = () => {
  const dispatch = useDispatch<AppDispatch>();
  const props: Props = {
    selectedStatus: useSelector<RootState, VisibilityFilterStatus>(
      (state) => state.visibilityFilter.selectedStatus
    ),
    selectFilter: (selectedFilter: VisibilityFilterStatus) => {
      dispatch(operations.changeSelectedStatus(selectedFilter));
    },
  };

  return <VisibilityFilter {...props} />;
};

export default Container;
