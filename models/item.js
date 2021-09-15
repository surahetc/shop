const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

const itemSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique:true
    },
    imgSrc:
    {
        type: String,
        required: true
    }
    ,
    price: {
        type: Number,
        required: true
    },
    date_added: {
        type: Date,
        default: Date.now
    },
});
itemSchema.plugin(uniqueValidator, {message: 'is already taken.'});


module.exports = item = mongoose.model('item',itemSchema);