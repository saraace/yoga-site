import { LOGIN, LOGOUT, LOCAL_LOGIN, CLEAR_VERIFIER } from "../actions/auth";

const initialState = {
  auth: false,
  access_token: null,
  refresh_token: null,

  // For Development
  code_verifier: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        auth: true,
        access_token: action.payload.access_token,
        refresh_token: action.payload.refresh_token,
        code_verifier: null,
      };
    }
    case LOCAL_LOGIN: {
      return {
        ...state,
        code_verifier: action.payload.code_verifier,
      };
    }
    case CLEAR_VERIFIER: {
      return {
        ...state,
        code_verifier: null,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        auth: false,
        access_token: null,
        refresh_token: null,
      };
    }
    default: {
      return state;
    }
  }
}
