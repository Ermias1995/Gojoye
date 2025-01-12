const mongoose = require('mongoose');

const InquirySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user", 
        required: false, 
    },
    name: {
        type: String,
        required: true, 
    },
    email: {
        type: String,
        required: true, 
    },
    phone: {
        type: String,
        required: false, 
    },
    message: {
        type: String,
        required: true, 
    },
    property: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "property", 
        required: false, 
    },
    status: {
        type: String,
        enum: ["Pending", "Responded", "Closed"],
        default: "Pending",
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('inquiry', InquirySchema);
