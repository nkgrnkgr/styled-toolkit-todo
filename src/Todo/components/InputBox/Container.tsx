import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../modules/types";
import InputBox from "./InputBox";
import { operations } from "../../modules/inputBox";

const Container = () => {
  const dispatch = useDispatch<AppDispatch>();
  const props = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      dispatch(operations.changeText(e.target.value)),
    onClick: () => {},
  };

  return <InputBox {...props} />;
};

export default Container;
