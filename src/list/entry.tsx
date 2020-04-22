import React from "react";
import InputBox from "./components/InputBox";
import VisibilityFilter from "./components/VisibilityFilter";
import Task from "./components/Task";

const List = () => {
  return (
    <React.Fragment>
      <InputBox />
      <Task />
      <VisibilityFilter />
    </React.Fragment>
  );
};

export default List;
