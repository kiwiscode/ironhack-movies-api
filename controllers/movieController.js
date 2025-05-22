const Movie = require("../models/Movie.model");

// 1.1, 1.2, 1.3 – getAllMovies
exports.getAllMovies = async (req, res) => {
  try {
    const { genre, sortBy, order } = req.query;
    const query = {};

    if (genre) {
      const formattedGenre =
        genre.charAt(0).toUpperCase() + genre.slice(1).toLowerCase();
      query.genre = formattedGenre;
    }

    let sortOption = {};
    const sortOrder = order === "asc" ? 1 : -1;

    if (sortBy === "releaseDate") sortOption.year = sortOrder;
    if (sortBy === "rating") sortOption.rating = sortOrder;
    if (sortBy === "userRating") sortOption.averageUserRating = sortOrder;

    console.log("Genre:", genre, "SortBy:", sortBy, "Order:", order);

    const movies = await Movie.find(query).sort(sortOption).populate("reviews");

    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 2.1 – getMovieById
exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id).populate("reviews");
    if (!movie) return res.status(404).json({ message: "Movie not found" });
    res.json(movie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 2.2 – getMovieMedia
exports.getMovieMedia = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: "Movie not found" });
    res.json(movie.media);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 3.1 – searchMovies
exports.searchMovies = async (req, res) => {
  try {
    const keyword = req.params.keyword;
    const movies = await Movie.find({
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { genre: { $regex: keyword, $options: "i" } },
        { director: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    });

    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
