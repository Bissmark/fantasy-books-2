const Book = require('../models/book');

const index = async(req, res) => {
    const books = await Book.find({});
    console.log(books);
    res.render('books/index', {books});
}

const newBook = (req, res) => {
    res.render('books/new', {errorMsg: ''});
}

const create = async(req, res) => {
    try {
        await Book.create(req.body);
        res.redirect(`/books`);
    } catch (err) {
        console.log(err);
        res.render('books/new', { errorMsg: err.message });
    }
}

module.exports = {
    index,
    new: newBook,
    create
}

