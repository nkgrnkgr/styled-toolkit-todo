import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../modules/types";
import { Props as ItemProps } from "../Task/Item";
import InputBox from "./InputBox";
import { operations as inputBoxOparations } from "../../modules/inputBox";
import { operations as taskOparations } from "../../modules/task";
import { RootState } from "../../modules/store";

const Container = () => {
  const dispatch = useDispatch<AppDispatch>();
  const text = useSelector<RootState, string>((state) => state.inputBox.text);
  const items = useSelector<RootState, ItemProps[]>(
    (state) => state.task.items
  );
  const props = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      dispatch(inputBoxOparations.changeText(e.target.value)),
    onClick: () => {
      dispatch(
        taskOparations.addTask({ id: items.length + 1, text, completed: false })
      );
    },
  };

  return <InputBox {...props} />;
};

export default Container;
