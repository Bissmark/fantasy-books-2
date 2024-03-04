const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const readBooksSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    book: {
        type: Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    }
});

module.exports = mongoose.model('ReadBook', readBooksSchema);
