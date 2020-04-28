import {
    combineReducers,
    getDefaultMiddleware,
    configureStore,
  } from "@reduxjs/toolkit";
  import * as inputBox from "./inputBox";
  
  const rootReducer = combineReducers({
    inputBox: inputBox.reducer,
  });
  
  export type RootState = ReturnType<typeof rootReducer>;
  
  export default function setupStore() {
    const middleware = getDefaultMiddleware();
    return configureStore({
      reducer: rootReducer,
      middleware,
    });
  }
  