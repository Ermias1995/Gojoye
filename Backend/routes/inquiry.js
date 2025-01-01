const router = require("express").Router();
const Inquiry = require("../models/Inquiry");
const { verifyToken } = require("./verifyToken");

// Create a new inquiry
router.post("/", verifyToken, async (req, res, next) => {
    try {
        const newInquiry = new Inquiry({
            ...req.body,
            user: req.user._id, 
        });
        const savedInquiry = await newInquiry.save();
        res.status(201).json({ message: "Inquiry sent successfully!", inquiry: savedInquiry });
    } catch (error) {
        next(error);
    }
});

// Get inquiries for a landlord
router.get("/:landlordId", verifyToken, async (req, res, next) => {
    try {
        const inquiries = await Inquiry.find({ landlord: req.params.landlordId }).populate("user", "username email");
        res.status(200).json(inquiries);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
