import React from "react";
import Task from "./Task";
import { ItemModel } from "./Item";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../modules/store";
import { AppDispatch } from "../../modules/types";
import { operations } from "../../modules/task";

const Container = () => {
  const dispatch = useDispatch<AppDispatch>();
  const props = {
    items: useSelector<RootState, ItemModel[]>((state) => state.task.items),
    onClickItem: (id: number) => {
      dispatch(operations.changeState(id));
    },
  };

  return <Task {...props} />
};

export default Container;
