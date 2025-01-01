const router = require("express").Router();
const Property = require("../models/Property"); 
const { verifyToken, verifyTokenAndAuthorization } = require("./verifyToken");

// Create a new property
router.post("/add", verifyToken, async (req, res, next) => {
    try {
        const newProperty = new Property({
            ...req.body, 
            landlord: req.user._id, 
        });
        const savedProperty = await newProperty.save();
        res.status(201).json({ message: "Property added successfully!", property: savedProperty });
    } catch (error) {
        next(error);
    }
});

// Update a property
router.put("/:id", verifyTokenAndAuthorization, async (req, res, next) => {
    try {
        const updatedProperty = await Property.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json({ message: "Property updated successfully!", property: updatedProperty });
    } catch (error) {
        next(error);
    }
});

// Delete a property
router.delete("/:id", verifyTokenAndAuthorization, async (req, res, next) => {
    try {
        await Property.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Property deleted successfully!" });
    } catch (error) {
        next(error);
    }
});

// Get a single property
router.get("/:id", async (req, res, next) => {
    try {
        const property = await Property.findById(req.params.id).populate("landlord", "username email");
        if (!property) {
            return res.status(404).json({ message: "Property not found!" });
        }
        res.status(200).json(property);
    } catch (error) {
        next(error);
    }
});

// Get all properties (with search functionality)
router.get("/", async (req, res, next) => {
    try {
        const filters = req.query; 
        const properties = await Property.find(filters).populate("landlord", "username email");
        res.status(200).json(properties);
    } catch (error) {
        next(error);
    }
});

// Get properties by landlord
router.get("/landlord/:landlordId", verifyToken, async (req, res, next) => {
    try {
        const properties = await Property.find({ landlord: req.params.landlordId });
        res.status(200).json(properties);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
