import { SET_USER } from "../actions/user";

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER: {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
}
