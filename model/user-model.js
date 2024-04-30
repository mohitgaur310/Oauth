const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  googleId: {
    type: String,
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
