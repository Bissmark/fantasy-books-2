const Book = require('../models/book');

async function index(req, res) {
    const books = await Book.find({});
    res.render('books/index', books);
}

module.exports = {
    index
}

