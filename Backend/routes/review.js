const router = require("express").Router();
const Review = require("../models/Review");
const Property = require("../models/Property");
const { verifyToken } = require("./verifyToken");

// Add a new review
router.post("/", verifyToken, async (req, res, next) => {
    try {
        const { property, user, rating, comment } = req.body;

        const propertyExists = await Property.findById(property);
        if (!propertyExists) {
            return res.status(404).json({ message: "Property not found!" });
        }

        const existingReview = await Review.findOne({ property, user });
        if (existingReview) {
            return res.status(400).json({ message: "You have already reviewed this property!" });
        }

        const newReview = new Review({
            property,
            user,
            rating,
            comment,
        });

        const savedReview = await newReview.save();

        res.status(201).json({ message: "Review added successfully!", review: savedReview });
    } catch (err) {
        next(err);
    }
});

// Get all reviews for a specific property
router.get("/:propertyId", async (req, res, next) => {
    try {
        const reviews = await Review.find({ property: req.params.propertyId })
            .populate("user", "username email") 
            .sort({ createdAt: -1 }); 

        if (!reviews || reviews.length === 0) {
            return res.status(404).json({ message: "No reviews found for this property!" });
        }

        res.status(200).json(reviews);
    } catch (err) {
        next(err);
    }
});

// Update a review
router.put("/:id", verifyToken, async (req, res, next) => {
    try {
        const { rating, comment } = req.body;

        const review = await Review.findById(req.params.id);

        if (!review) {
            return res.status(404).json({ message: "Review not found!" });
        }

        if (review.user.toString() !== req.user._id) {
            return res.status(403).json({ message: "You can only update your own reviews!" });
        }

        review.rating = rating ?? review.rating;
        review.comment = comment ?? review.comment;

        const updatedReview = await review.save();

        res.status(200).json({ message: "Review updated successfully!", review: updatedReview });
    } catch (err) {
        next(err);
    }
});

// Delete a review
router.delete("/:id", verifyToken, async (req, res, next) => {
    try {
        const review = await Review.findById(req.params.id);

        if (!review) {
            return res.status(404).json({ message: "Review not found!" });
        }

        if (review.user.toString() !== req.user._id) {
            return res.status(403).json({ message: "You can only delete your own reviews!" });
        }

        await review.remove();

        res.status(200).json({ message: "Review deleted successfully!" });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
