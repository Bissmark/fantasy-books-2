const List = require('../models/list');
const Book = require('../models/book');

const index = async(req, res) => {
    const lists = await List.find({user: req.user._id}).populate('booksToRead');
    res.render('lists/index', {title: 'All Lists', lists});
}

const show = async(req, res) => {
    const list = await List.findById(req.params.id).populate('booksToRead');
    console.log(list);
    //const books = await Book.find({});
    res.render('lists/show', {title: list.title, list});
}

const newListHaveRead = async(req, res) => {
    const books = await Book.find({});
    res.render('lists/newBooksHaveRead', { title: 'Have Read', books, errorMsg: ''});
}

const newListToRead = async(req, res) => {
    const books = await Book.find({});
    res.render('lists/newBooksToRead', { title: 'Want to Read', books, errorMsg: ''});
}

const newList = async(req, res) => {
    const books = await Book.find({});
    res.render('lists/new', { title: 'New List', books, errorMsg: ''});
}

const create = async(req, res) => {
    const list = new List({
        ...req.body,
        user: req.user._id
    });
    await list.save();
    res.redirect('/lists');
}

module.exports = {
    index,
    show,
    create,
    new: newList,
    newBooksHaveRead: newListHaveRead,
    newBooksToRead: newListToRead
}