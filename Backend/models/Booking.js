const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    property: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "property", 
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user", 
        required: true,
    },
    transactionType: {
        type: String,
        enum: ["sale", "rent"],
        required: true,
    },
    // Rental-specific fields
    rentalDetails: {
        moveInDate: { type: Date, required: function () { return this.transactionType === "rent"; } },
        rentalDuration: { type: Number, required: function () { return this.transactionType === "rent"; } },
    },
    // Sale-specific fields
    saleDetails: {
        buyerName: { type: String, required: function () { return this.transactionType === "sale"; } },
        buyerContact: { type: String, required: function () { return this.transactionType === "sale"; } },
    },
    totalAmount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ["Pending", "Confirmed", "Cancelled"],
        default: "Pending",
    },
    paymentMethod: {
        type: String,
        enum: ["Credit Card", "Bank Transfer", "Cash", "Other"],
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now, 
    },
});

module.exports = mongoose.model('booking', BookingSchema);
