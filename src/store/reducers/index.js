import { combineReducers } from "redux";

import dataManager from "./app";

const reducer = combineReducers({
  // app reducers
  app: dataManager,
});

export default reducer;
