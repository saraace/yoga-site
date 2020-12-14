import { combineReducers } from "redux";

import dataManager from "./app";
import authReducer from "./auth";

const reducer = combineReducers({
  // app reducers
  app: dataManager,
  auth: authReducer,
});

export default reducer;