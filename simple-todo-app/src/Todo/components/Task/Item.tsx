import React from "react";
import styled from "styled-components";
import { PropsForStyled } from "../../../typing/styled";

export interface ItemModel {
  id: number;
  text: string;
  completed: boolean;
}

type Props = ItemModel &
  PropsForStyled & {
    onClickItem: (id: number) => void;
  };

const Item: React.FC<Props> = ({
  id,
  text,
  completed,
  className,
  onClickItem,
}) => {
  return (
    <li
      onClick={() => onClickItem(id)}
      className={completed ? `${className}-Item-done` : ""}
    >
      {text}
    </li>
  );
};

const StyledItem = styled(Item)`
  &-Item-done {
    text-decoration: line-through;
  }
`;

export default StyledItem;
