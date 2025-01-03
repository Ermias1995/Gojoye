const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    userType: {
        type: String,
        enum: ["renter", "landlord", "admin"],
        default: "renter",
    },
    generatedOTP: {
        type: String,
        required: false,
    },

}, {
    timestamps: true,
})

module.exports = mongoose.model('user', UserSchema);