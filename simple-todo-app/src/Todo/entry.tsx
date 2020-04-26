import React from "react";
import InputBox from "./components/InputBox";
import VisibilityFilter from "./components/VisibilityFilter";
import Task from "./components/Task";
import setupStore from "./modules/store";
import { Provider } from "react-redux";

export const store = setupStore();

const Todo = () => {
  return (
    <React.Fragment>
    <Provider store={store}>
      <InputBox />
      <Task />
      <VisibilityFilter />
    </Provider>
    </React.Fragment>
  );
};

export default Todo;
