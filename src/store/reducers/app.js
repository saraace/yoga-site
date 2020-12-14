import { SET_DATA } from "../actions/app";

const initialState = {};

export default function dataManager(state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return { ...state, [action.name]: action.payload };
    default:
      return state;
  }
}
