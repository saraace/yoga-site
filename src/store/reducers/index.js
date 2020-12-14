import { combineReducers } from "redux";

import dataManager from "./app";
import userReducer from "./user";

const reducer = combineReducers({
  // app reducers
  app: dataManager,
  user: userReducer,
});

export default reducer;