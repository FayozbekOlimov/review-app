const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const likeSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the user who liked
  review: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Review",
    required: true,
  },
});

module.exports = mongoose.model("Like", likeSchema);
