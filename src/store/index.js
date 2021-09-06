import { useMemo } from "react";
import { applyMiddleware, createStore } from "redux";
import { loadState } from "../services/localstorage";

import reducers from "./reducers";

let store;
const persistentState = loadState();
const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};
const initStore = (preloadedState = persistentState) => {
  const _store = createStore(reducers, preloadedState);
  return _store;
};

export const initOrGetStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initOrGetStore(initialState), [initialState]);
  return store;
}
