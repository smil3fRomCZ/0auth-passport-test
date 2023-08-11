const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ninjaSchema = new Schema({
  user_name: String,
  googleId: String,
  thumbnail: String,
});

const Ninja = mongoose.model("ninja", ninjaSchema);

module.exports = Ninja;
