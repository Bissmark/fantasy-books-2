const Book = require('../models/book');

const indexRead = async(req, res) => {
    try {
        const books = await Book.find({}).sort({ createdAt: -1 });
        const genres = ['Fantasy', 'Action', 'Crime', 'Romance'];
        const reviews = books.map(book => book.reviews.map(review => review.rating));
        res.render('profile/indexRead', {title: 'Books I have Read', books, reviews, genres });
    } catch (err) {
        console.log(err);
    }
}

const indexNotRead = async(req, res) => {
    try {
        const books = await Book.find({}).sort({ createdAt: -1 });
        const genres = ['Fantasy', 'Action', 'Crime', 'Romance'];
        const reviews = books.map(book => book.reviews.map(review => review.rating));
        res.render('profile/indexNotRead', {title: 'Books I have Not Read', books, reviews, genres });
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    indexRead,
    indexNotRead
}