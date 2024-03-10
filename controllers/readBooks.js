const Book = require('../models/book');

const index = async(req, res) => {
    try {
        const books = await Book.find({}).sort({ createdAt: -1 });
        const reviews = books.map(book => book.reviews.map(review => review.rating));
        res.render('readbooks/index', {title: 'Books I have Read', books, reviews });
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    index
}