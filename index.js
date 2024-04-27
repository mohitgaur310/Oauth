const express = require("express");

const app = express();
app.set("view engine", "ejs");

const authRoutes = require("./routes/auth.routes");

app.get("/home", (req, res) => {
  res.render("home");
});
app.use("/auth", authRoutes);
app.listen(8000, () => console.log("running on port ", 8000));
