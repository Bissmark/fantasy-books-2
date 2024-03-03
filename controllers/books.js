const Book = require('../models/book');

const index = async(req, res) => {
    const books = await Book.find({});
    res.render('books/index', {books});
}

const show = async(req, res) => {
    const book = await Book.findById(req.params.id);
    res.render('books/show', {book});
}

const edit = async(req, res) => {
    const book = await Book.findById(req.params.id);
    res.render('books/edit', {book});
}

const newBook = (req, res) => {
    res.render('books/new', {errorMsg: ''});
}

const update = async(req, res) => {
        await Book.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/books/${req.params.id}`);
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

const deleteBook = async(req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.redirect('/books');
}

module.exports = {
    index,
    show,
    new: newBook,
    create,
    edit,
    update,
    delete: deleteBook,
}

