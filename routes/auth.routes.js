const passport = require("passport");

const router = require("express").Router();

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/loggout", (req, res) => {
  res.render("Log out successful");
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);
router.get(
  "/google/redirect",
  passport.authenticate("google", {
    successRedirect: "/auth/google/success",
    failureRedirect: "/auth/google/failure",
  }),
  (req, res) => {
    res.send("Redirect url");
  }
);

module.exports = router;
