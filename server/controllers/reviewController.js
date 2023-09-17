const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const Review = require("../models/Review");

const createReview = async (req, res) => {
  try {
    const { reviewName, group, tags, reviewText, image, grade } = req.body;

    if (!reviewName || !group || !reviewText || grade === undefined) {
      return res
        .status(400)
        .json({ message: "All required fields must be provided." });
    }

    const newReview = new Review({
      reviewName,
      group,
      tags,
      reviewText,
      image,
      grade,
      authorId: new ObjectId("64fb039c2bba245c9ccc3053"),
    });

    await newReview.save();

    res.status(201).json(newReview);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Review creation failed." });
  }
};

const getReviews = async (req, res) => {
  try {
    const allReviews = await Review.find();
    res.status(200).json(allReviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch reviews." });
  }
};

const getSingleReview = async (req, res) => {
  const reviewId = req.params._id;

  try {
    const review = await Review.findOne({ _id: reviewId });

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.status(200).json(review);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch the review" });
  }
};

module.exports = {
  createReview,
  getReviews,
  getSingleReview,
};
