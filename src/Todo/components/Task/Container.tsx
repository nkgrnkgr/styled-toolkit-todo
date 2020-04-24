import React from "react";
import Task from "./Task";
import { Props as ItemProps } from "./Item";
import { useSelector } from "react-redux";
import { RootState } from "../../modules/store";

const Container = () => {
  const items = useSelector<RootState, ItemProps[]>(
    (state) => state.task.items
  );

  return <Task items={items} />;
};

export default Container;
