
import React from "react";
import styled from "styled-components";
import { PropsForStyled } from "../../../typing/styled";

export interface Props extends PropsForStyled {
    text: string;
    isDone: boolean;
}

const Item: React.FC<Props> = ({ text, isDone, className}) => {
  return (
      <li className={isDone ? `${className}-Item-done` : ''}>{text}</li>
  );
};

 
const StyledItem = styled(Item)`
  &-Item-done {
    text-decoration: line-through;
  }
`;

export default StyledItem;
