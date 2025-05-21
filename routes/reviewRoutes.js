const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");

// 4.1 – Rate a movie (and optionally comment)
router.post("/:movieId", reviewController.createReview);

// 4.3 – Leave comment (also included above)

// 4.2 – Add/Remove favorites
// Optional: If user accounts exist. Otherwise, can be stubbed or ignored.

module.exports = router;
