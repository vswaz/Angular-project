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
        type: Number
    },
    height: {
        type: Number
    },
    marital: {
        type: String
    },
    message: {
        type: String
    }
 });

//let Food = mongoose.model('food', foodSchema);
//module.exports = mongoose.models.food || Food;
mongoose.model('biography', biographySchema);