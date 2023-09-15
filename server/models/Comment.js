const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  text: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  review: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Review",
    required: true,
  },
});

module.exports = mongoose.model("Comment", commentSchema);
