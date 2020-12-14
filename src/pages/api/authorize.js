import withSession from "../../services/session";

export default withSession(async (req, res) => {
  const code = req.query.code;
  const state = req.query.state;
  const redirect = req.query.redirect || "/";
  if (!code || !state) return res.status(403).send("Unauthorized");
  req.session.set("user", {
    code,
    state,
  });
  await req.session.save();
  return res.redirect(`${redirect}`);
});
