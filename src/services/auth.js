import { get } from "./rest";
// import withSession from "./session";

// const authorize = (async (req, res) => {
//   const code = req.query.code;
//   const state = req.query.state;
//   if (!code || !state) return res.status(403).send("Unauthorized");
//   req.session.set("user", {
//     code,
//     state,
//   });
//   await req.session.save();
//   return res.redirect("/");
// });

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
    const search = window.wLoginReference.location.search;
    if (search) {
      const path = window.location.pathname;
      window.wLoginReference.close();
      window.location.href = `/api/authorize${search}&redirect=${path}`;
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
