import {
  combineReducers,
  getDefaultMiddleware,
  configureStore,
} from "@reduxjs/toolkit";
import * as inputBox from "./inputBox";
import * as task from "./task";
import * as visibilityFilter from "./visibilityFIlter";

const rootReducer = combineReducers({
  inputBox: inputBox.reducer,
  task: task.reducer,
  visibilityFilter: visibilityFilter.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default function setupStore() {
  const middleware = getDefaultMiddleware();
  return configureStore({
    reducer: rootReducer,
    middleware,
  });
}
