const express = require("express");
const router = express.Router();
const {
  getReviews,
  createReview,
  getSingleReview,
} = require("../controllers/reviewController");

router.get("/", getReviews).post("/", createReview);

router.get("/:_id", getSingleReview);
module.exports = router;
