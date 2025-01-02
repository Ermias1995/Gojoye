const router = require("express").Router();
const Property = require("../models/Property");
const { verifyToken } = require("./verifyToken");
const Booking = require("../models/Booking");

// Checkout Process
router.post("/checkout/:propertyId", verifyToken, async (req, res, next) => {
    try {
        const { propertyId } = req.params;
        const { moveInDate, rentalDuration, buyerInfo, paymentMethod } = req.body;

        const property = await Property.findById(propertyId);
        if (!property) {
            return res.status(404).json({ message: "Property not found!" });
        }

        if (!property.isAvailable) {
            return res.status(400).json({ message: "Property is no longer available!" });
        }


        if (property.transactionType === "rent") {
            if (!moveInDate || !rentalDuration) {
                return res.status(400).json({ message: "Move-in date and rental duration are required for rentals!" });
            }

            const totalAmount = property.price * duration;
            const newBooking = new Booking({
                property: propertyId,
                user: req.user._id,
                transactionType: "rent",
                rentalDetails: {
                    moveInDate,
                    rentalDuration,
                },
                totalAmount,
                paymentMethod,
            });
    
            const savedBooking = await newBooking.save();
            property.isAvailable = false;
            await property.save();

            res.status(201).json({ message: "Booking successful!", booking: savedBooking });
        } else if (property.transactionType === "sale") {
        
            if (!buyerInfo || !buyerInfo.fullName || !buyerInfo.contact) {
                return res.status(400).json({ message: "Buyer information is required for sales!" });
            }

            const totalAmount = property.price;
            const newBooking = new Booking({
                property: propertyId,
                user: req.user._id,
                transactionType: "sale",
                saleDetails: {
                    buyerName: buyerInfo.fullName,
                    buyerContact: buyerInfo.contact,
                },
                totalAmount,
                paymentMethod,
            });

            const savedBooking = await newBooking.save();
            property.isAvailable = false;
            await property.save();

            res.status(201).json({ message: "Booking successful!", booking: savedBooking });
        } else {
            return res.status(400).json({ message: "Invalid transaction type!" });
        }
    } catch (error) {
        next(error);
    }
});


const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/payment", verifyToken, async (req, res, next) => {
    try {
        const { amount } = req.body;

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100, // Convert to cents
            currency: "usd",
            payment_method_types: ["card"],
        });

        res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (err) {
        next(err);
    }
});

router.put("/confirm/:id", verifyToken, async (req, res, next) => {
    try {
        const bookingId = req.params.id;

        const updatedBooking = await Booking.findByIdAndUpdate(
            bookingId,
            { paymentStatus: "Completed" },
            { new: true }
        );

        if (!updatedBooking) return res.status(404).json({ message: "Booking not found!" });

        res.status(200).json({ message: "Payment confirmed!", booking: updatedBooking });
    } catch (err) {
        next(err);
    }
});


module.exports = router;
