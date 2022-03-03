const mongoose = require('mongoose');

const biographySchema = new mongoose.Schema({
    // name: {
    //     type: String,
    //     required: true,
    //     min: 3
    // },
    // type: {
    //     type: String,
    //     required: true
        
    // }
 });

//let Food = mongoose.model('food', foodSchema);
//module.exports = mongoose.models.food || Food;
mongoose.model('biography', biographySchema);