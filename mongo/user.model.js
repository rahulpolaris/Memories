const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    password: String,
    userID: String,
    userPosts: Array
})

const userModel = new mongoose.model('User',userSchema)

module.exports = userModel