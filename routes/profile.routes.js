const router = require("express").Router();
const { authCheck } = require("../middleware/middleware");
router.get("/", authCheck, (req, res) => {
  res.render("profile", { user: req.user });
});

module.exports = router;
