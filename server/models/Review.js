const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  reviewName: { type: String, required: true },
  group: { type: String, required: true },
  tags: [{ type: String }],
  reviewText: { type: String, required: true },
  image: { type: String },
  grade: { type: Number, min: 0, max: 10, required: true },
  date: { type: Date, default: Date.now },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Review", reviewSchema);
