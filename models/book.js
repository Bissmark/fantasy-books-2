const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});

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
    haveRead: {
        type: Boolean
    },
    image: {
        type: String
    },
    cloudinary_id: {
        type: String
    },
    reviews: [reviewSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);