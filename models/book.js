const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number
    },
    author: {
        type: String
    },
    genre: {
        type: String,
        enum: ['fantasy', 'action', 'crime', 'romance']
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    cloudinary_id: {
        type: String
    }
})

module.exports = mongoose.model('Book', bookSchema);