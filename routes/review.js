const express = require("express");
const router = express.Router({mergeParams : true});
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../Models/listing.js");
const Review = require("../Models/review.js");
const {validateReview,isLoggedIn,isreviewAuthor} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

// post review route

router.post("/",isLoggedIn,validateReview, wrapAsync(reviewController.createReview));

// delete review route

router.delete("/:reviewId",isLoggedIn,isreviewAuthor, wrapAsync(reviewController.deleteReview));

module.exports = router;