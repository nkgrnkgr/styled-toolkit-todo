import React from "./node_modules/react";
import Task from "./Task";
import { Props as ItemProps } from "./Item";

const Container = () => {
  const items: ItemProps[] = [
    {
      text: "hello",
      isDone: false,
    },
    {
      text: "world",
      isDone: true,
    },
  ];

  return <Task items={items} />;
};

export default Container;
