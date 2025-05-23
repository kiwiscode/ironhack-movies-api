const Review = require("../models/Review.model");
const Movie = require("../models/Movie.model");

// 4.1 + 4.3 – createReview
exports.createReview = async (req, res) => {
  try {
    const { reviewer, rating, comment } = req.body;
    const { movieId } = req.params;

    const review = new Review({ reviewer, rating, comment, movie: movieId });
    await review.save();

    // push to movie to the first position
    await Movie.findByIdAndUpdate(movieId, {
      $push: {
        reviews: {
          $each: [review._id],
          $position: 0,
        },
      },
    });

    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
