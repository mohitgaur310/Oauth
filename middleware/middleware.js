const authCheck = (req, res, next) => {
  if (!req.user) res.redirect("/auth/login");
  next();
};

module.exports = { authCheck };
