import React from "react";
import styled from "styled-components";
import { PropsForStyled } from "../../../typing/styled";

export interface Props extends PropsForStyled {
  id: number;
  text: string;
  completed: boolean;
}

const Item: React.FC<Props> = ({ text, completed: isDone, className }) => {
  return <li className={isDone ? `${className}-Item-done` : ""}>{text}</li>;
};

const StyledItem = styled(Item)`
  &-Item-done {
    text-decoration: line-through;
  }
`;

export default StyledItem;
