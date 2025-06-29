const express = require("express");
const router = express.Router();
const favoriteController = require("../controllers/favoriteController");

router.get("/", favoriteController.getAllFavorites);

module.exports = router;
