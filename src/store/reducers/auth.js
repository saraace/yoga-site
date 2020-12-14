import { LOGIN, LOGOUT } from "../actions/auth";

const initialState = {
  auth: false,
  token: null,
  state: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        auth: true,
        token: action.payload.token,
        state: action.payload.state,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        auth: false,
        token: null,
        state: null,
      };
    }
    default: {
      return state;
    }
  }
}
