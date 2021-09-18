const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {itemSchema}=require('./item')


const wishlistSchema = new Schema({
    username: {type: String},
    items  :[itemSchema]
            
            
})

wishlist = mongoose.model('wishlist',wishlistSchema)

module.exports =wishlist ;