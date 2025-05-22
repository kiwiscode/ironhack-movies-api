const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    movie: {
      type: Schema.Types.ObjectId,
      ref: "Movie",
      required: true,
    },
    reviewer: {
      type: String,
      trim: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 10,
    },
    comment: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

reviewSchema.post("save", async function () {
  const Movie = require("../models/Movie.model");
  const movie = await Movie.findById(this.movie);
  if (movie) {
    await movie.updateAverageRating();
  }
});

reviewSchema.post("remove", async function () {
  const Movie = require("../models/Movie.model");
  const movie = await Movie.findById(this.movie);
  if (movie) {
    await movie.updateAverageRating();
  }
});

const Review = model("Review", reviewSchema);

module.exports = Review;
