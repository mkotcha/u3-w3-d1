import { combineReducers, configureStore } from "@reduxjs/toolkit";
import jobsReducer from "../reducers/jobs";
import favCompReducer from "../reducers/favComp";

const mainReducer = combineReducers({
  jobs: jobsReducer,
  favComp: favCompReducer,
});

const store = configureStore({
  // reducer
  reducer: mainReducer,
});

export default store;
