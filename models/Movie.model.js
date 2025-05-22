const { Schema, model } = require("mongoose");

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

const Movie = model("Movie", movieSchema);

module.exports = Movie;
