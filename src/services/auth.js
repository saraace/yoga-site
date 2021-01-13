import { get } from "./rest";
import { initOrGetStore } from "../store/index";

export const login = async () => {
  const dev = process.env.NODE_ENV === "development";
  window.wLoginReference = window.wLoginReference || null;
  if (window.wLoginReference == null || window.wLoginReference.closed) {
    /* if the pointer to the window object in memory does not exist
     or if such pointer exists but the window was closed */
    const {
      data: {
        data: {
          getPKCEAuthenticationUrl: { code_verifier, url },
        },
      },
    } = await get({
      url: `${process.env.GRAPHQL_API}/graphql?query={getPKCEAuthenticationUrl{code_verifier,url}}`,
    });

    const windowFeatures =
      "width=600,height=600,menubar=0,location=0,resizable=1,scrollbars=0,status=0,toolbar=0";

    window.wLoginReference = window.open(url, "Login", windowFeatures);
    if (dev) {
      const dispatch = initOrGetStore().dispatch;
      dispatch({
        type: "LOCAL_LOGIN",
        payload: { code_verifier },
      });
    } else {
      setTimeout(() => {
        catchAndClose(code_verifier);
      }, 500);
    }
    /* then create it. The new window will be created and
       will be brought on top of any other window. */
  } else {
    window.wLoginReference.focus();
    /* else the window reference must exist and the window
       is not closed; therefore, we can bring it back on top of any other
       window with the focus() method. There would be no need to re-create
       the window or to reload the referenced resource. */
  }
};

const catchAndClose = (code_verifier) => {
  try {
    const dispatch = initOrGetStore().dispatch;
    const search = window.wLoginReference.location.search;
    if (search) {
      const urlParams = new URLSearchParams(search);
      const token = urlParams.get("code");
      const state = urlParams.get("state");
      window.wLoginReference.close();
      dispatch({
        type: "AUTHENTICATE",
        payload: { token, state, code_verifier },
      });
    } else {
      setTimeout(() => {
        catchAndClose(code_verifier);
      }, 500);
    }
  } catch (e) {
    setTimeout(() => {
      catchAndClose(code_verifier);
    }, 500);
  }
};
