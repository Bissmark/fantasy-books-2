const Book = require('../models/book');
const cloudinary = require('../utilities/cloudinary');

const index = async(req, res) => {
    const books = await Book.find({});
    console.log(index);
    res.render('books/index', {title: 'All Books', books});
}

const show = async(req, res) => {
    const book = await Book.findById(req.params.id);
    res.render('books/show', { title: book.title, book });
}

const edit = async(req, res) => {
    const book = await Book.findById(req.params.id);
    res.render('books/edit', {title: 'Edit Book', book});
}

const newBook = (req, res) => {
    res.render('books/new', {title: 'New Book', errorMsg: ''});
}

const update = async(req, res) => {
    await Book.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/books/${req.params.id}`);
}

const create = async(req, res) => {
    // convert haveRead's checkbox of nothing or "on" to boolean
    req.body.haveRead = !!req.body.haveRead;
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        console.log(result);
        const book = new Book({
            ...req.body,
            image: result.secure_url,
            cloudinary_id: result.public_id
        })
        await book.save();
        res.redirect(`/books/${book._id}`);
    } catch (err) {
        console.log(err);
        res.render('books/new', { title: 'New Book', errorMsg: err.message });
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

