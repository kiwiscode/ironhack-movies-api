const Movie = require("../models/Movie.model");

exports.getAllFavorites = async (req, res) => {
  try {
    const ids = req.query.ids?.split(",").filter(Boolean);

    if (!ids || ids.length === 0) {
      return res.status(400).json({ message: "IDs are required in query." });
    }

    const movies = await Movie.find({ _id: { $in: ids } });
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
