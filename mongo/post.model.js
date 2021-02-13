const mongoose = require('mongoose');
const Schema = mongoose.Schema


const postSchema = new Schema({
    postID: String,
    postTitle: String,
    postDesc: String,
    postDest: String,
    publicVisibility: Boolean
})

const postModel = new mongoose.model('post',postSchema)

module.exports = postModel