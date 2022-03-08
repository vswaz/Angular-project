const mongoose = require('mongoose');

const biographySchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        min: 3
    },
    lastname: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    language: {
        type: String
    },
    age: {
        type: String
    },
    height: {
        type: String
    },
    marital: {
        type: String
    },
    message: {
        type: String
    }
 });


mongoose.model('biography', biographySchema);