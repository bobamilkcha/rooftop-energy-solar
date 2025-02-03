const mongoose = require("mongoose");

//CONSTRUCT SCHEMA FOR DATABASE
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
});

module.exports = mongoose.model("User", UserSchema);
