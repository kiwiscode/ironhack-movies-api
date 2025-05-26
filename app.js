const express = require("express");
const app = express();

require("dotenv").config();
require("./db");
require("./config")(app);

// health check
app.get("/", (_, res) => {
  return res.status(200).json({
    status: "healthy",
  });
});

const movieRoutes = require("./routes/movieRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const favoriteRoutes = require("./routes/favoriteRoutes");

app.use("/api/movies", movieRoutes); // movie routes
app.use("/api/reviews", reviewRoutes); // review/comment/rating routes
app.use("/api/favorites", favoriteRoutes); // /movies/favorites routes

module.exports = app;
