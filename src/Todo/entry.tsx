import React from "react";
import InputBox from "./components/InputBox";
import VisibilityFilter from "./components/VisibilityFilter";
import Task from "./components/Task";

const Todo = () => {
  return (
    <React.Fragment>
      <InputBox />
      <Task />
      <VisibilityFilter />
    </React.Fragment>
  );
};

export default Todo;
