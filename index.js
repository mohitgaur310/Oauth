const express = require("express");
const passportSetup = require("./config/passport-setup");
const app = express();
require("dotenv").config();
app.set("view engine", "ejs");

const authRoutes = require("./routes/auth.routes");

const connectDb = require("./db/db");

app.use("/auth", authRoutes);

app.get("/home", (req, res) => {
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
