import { get } from "./rest";
import { initOrGetStore } from "../store/index";

export const login = async () => {
  window.wLoginReference = window.wLoginReference || null;
  if (window.wLoginReference == null || window.wLoginReference.closed) {
    /* if the pointer to the window object in memory does not exist
     or if such pointer exists but the window was closed */
    const {
      data: {
        data: { getAuthenticationUrl: data },
      },
    } = await get({
      url: "https://gql.yogajoint.com/graphql?query={getAuthenticationUrl}",
    });
    window.wLoginReference = window.open(
      process.env.ENVIRONMENT === "production"
        ? data
        : `${window.location.origin}?code=Nz71IDZFWl8XRhp4hMUJfdzfPMCGbc&state=8c40004d2b0d4cb89e99341f63929a5d`,
      "Login",
      "toolbar=0,status=0,width=600,height=600"
    );
    catchAndClose();

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

const catchAndClose = () => {
  try {
    const dispatch = initOrGetStore().dispatch;
    const search = window.wLoginReference.location.search;
    if (search) {
      const urlParams = new URLSearchParams(search);
      const token = urlParams.get("code");
      const state = urlParams.get("state");
      window.wLoginReference.close();
      dispatch({ type: "LOGIN", payload: { token, state } });
    } else {
      setTimeout(() => {
        catchAndClose();
      }, 500);
    }
  } catch (e) {
    setTimeout(() => {
      catchAndClose();
    }, 500);
  }
};
