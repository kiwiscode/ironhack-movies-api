const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

// 1.1 – List movies
router.get("/", movieController.getAllMovies);

// 1.2 – Filter movies by genre
// (handled in same route as getAllMovies with query param: ?genre=action)

// 1.3 – Sort movies by release date, popularity, or rating
// (also handled in same route: ?sortBy=releaseDate | rating | popularity)

// 2.1 – View movie details
router.get("/:id", movieController.getMovieById);

// 2.2 – View trailers and images
// (This can be included in getMovieById or made separate)
router.get("/:id/media", movieController.getMovieMedia);

// 3.1 – Search movies by title or keyword
router.get("/search/:keyword", movieController.searchMovies);

module.exports = router;
