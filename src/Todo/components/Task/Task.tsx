import React from "react";
import Item, { Props as ItemProps } from "./Item";

export interface Props {
    items: ItemProps[]
}

const Task: React.FC<Props> = ({items}) => {
  return (
      <ul>
          {items.map(i => <Item key={i.text} {...i} />)}
      </ul>
  );
};

export default Task;
