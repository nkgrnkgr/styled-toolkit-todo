import React from "react";
import setupStore from "./modules/store";
import { Provider } from "react-redux";
import OrgUserInputBox from "./components/OrgUserInputBox/";

export const store = setupStore();

const Todo = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <OrgUserInputBox />
      </Provider>
    </React.Fragment>
  );
};

export default Todo;
