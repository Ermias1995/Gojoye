const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    location: {
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        zipCode: {
            type: String,
            required: true,
        },
        coordinates: {
            lat: {
                type: Number,
                required: false,
            },
            lng: {
                type: Number,
                required: false,
            }
        }
    },
    images: [{
        type: String, 
        required: true,
    }],
    amenities: [{
        type: String, 
        required: false,
    }],
    propertyType: {
        type: String,
        enum: ["house", "apartment", "condominium"],
        required: true,
    },
    bedrooms: {
        type: Number,
        required: true,
    },
    bathrooms: {
        type: Number,
        required: true,
    },
    landlord: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user", 
        required: true,
    },
    isAvailable: {
        type: Boolean,
        default: true,
    },
    favorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user", 
    }],
}, {
    timestamps: true,
});

module.exports = mongoose.model('property', PropertySchema);