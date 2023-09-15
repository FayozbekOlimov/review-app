const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
  rating: { type: Number, min: 1, max: 5 },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  reviewedItem: { type: String, required: true },
});

module.exports = mongoose.model("Rating", ratingSchema);
