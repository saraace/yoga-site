import { all, takeLeading, put } from "redux-saga/effects";
import { AUTHENTICATE, LOGIN, CLEAR_VERIFIER } from "../actions/auth";
import { get } from "../../services/rest";

// const getToken = ({ auth }) => auth.token;

function* authanticate({ payload: { state, token, code_verifier } }) {
  try {
    const {
      data: {
        data: {
          getAuthenticationToken: { access_token, refresh_token },
        },
      },
    } = yield get({
      url: `${process.env.GRAPHQL_API}/graphql`,
      params: {
        query: `{getAuthenticationToken(authorization_code:"${token}",code_verifier:"${code_verifier}"){access_token,refresh_token}}`,
      },
    });
    yield put({ type: LOGIN, payload: { access_token, refresh_token } });
  } catch (e) {
    yield put({
      type: CLEAR_VERIFIER,
      payload: { access_token, refresh_token },
    });
    alert("Unable to authenticate, try again");
    console.log("error", e);
    console.log("error", e.response);
  }
}

function* rootSaga() {
  yield all([takeLeading(AUTHENTICATE, authanticate)]);
}

export default rootSaga;
