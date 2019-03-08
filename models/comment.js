const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    name: String,
    movieId: Number,
    comment: String
});

const Comment = mongoose.model('Comments', commentSchema);

module.exports = Comment;