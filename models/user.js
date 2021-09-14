const mongoose =require('mongoose')
var uniqueValidator = require('mongoose-unique-validator');

var userSchema = new mongoose.Schema({
    username: {type :String, required:true,unique:true},
    password: {type :String, required:true}
  });

userSchema.plugin(uniqueValidator, {message: 'is already taken.'});
  
var user = mongoose.model('user', userSchema );

module.exports = user;