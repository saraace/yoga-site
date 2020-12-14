import withSession from "../../services/session";

export default withSession(async (req, res) => {
  req.session.destroy();
  res.redirect("/");
});
