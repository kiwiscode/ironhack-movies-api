const { Schema, model } = require("mongoose");
const Review = require("../models/Review.model");

const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    genre: {
      type: [String],
      default: [],
    },
    director: {
      type: String,
      required: true,
    },
    rating: {
      type: Number, // IMDB rate
      min: 0,
      max: 10,
    },
    averageUserRating: {
      type: Number,
      min: 0,
      max: 10,
      default: 0,
    },
    description: {
      type: String,
    },
    poster: {
      type: String,
    },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    media: {
      trailers: [
        {
          type: String,
        },
      ],
      images: [
        {
          type: String,
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

movieSchema.methods.updateAverageRating = async function () {
  const reviews = await Review.find({ movie: this._id });
  if (reviews.length === 0) {
    this.averageUserRating = 0;
  } else {
    const total = reviews.reduce((acc, r) => acc + r.rating, 0);
    this.averageUserRating = (total / reviews.length).toFixed(1);
  }
  await this.save();
};

const Movie = model("Movie", movieSchema);

module.exports = Movie;
