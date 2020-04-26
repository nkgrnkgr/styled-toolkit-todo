import React from "react";
import Item, { ItemModel } from "./Item";

export interface Props {
  items: ItemModel[];
  onClickItem: (id: number) => void;
}

const Task: React.FC<Props> = ({ items, onClickItem }) => {
  return (
    <ul>
      {items.map((i) => (
        <Item key={i.id} {...i} onClickItem={onClickItem} />
      ))}
    </ul>
  );
};

export default Task;
