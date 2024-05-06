const express = require("express");
const app = express();
require("dotenv").config();
app.set("view engine", "ejs");
const session = require("express-session");
const passport = require("passport");
const authRoutes = require("./routes/auth.routes");
const profileRoutes = require("./routes/profile.routes");
const cookieParser = require("cookie-parser");
const connectDb = require("./db/db");

app.use(cookieParser());
app.use(
  session({
    secret: process.env.COOKIE_KEY || "sdfdsafdsfdsfdsfdfdsfds",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, // Cookie expires in 24 hours
    },
  })
);
const passportSetup = require("./config/passport-setup");
app.use(passport.initialize());
app.use(passport.session());
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);
app.get("/", (req, res) => {
  res.render("home");
});

connectDb()
  .then(() => {
    app.on("error", (error) => {
      console.log(error);
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running on port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error in connection with database !!!", err);
  });
