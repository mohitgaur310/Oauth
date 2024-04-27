const router = require("express").Router();

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/loggout", (req, res) => {
  res.render("Log out successful");
});

router.get("/google", (req, res) => {
  res.render("Google");
});

module.exports = router;
