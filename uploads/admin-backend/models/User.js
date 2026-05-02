const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: String,
  version: String,
  os: String,
  totalScore: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("User", userSchema);