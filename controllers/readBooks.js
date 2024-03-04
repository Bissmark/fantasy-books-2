const ReadBook = require('../models/readBook');
const Book = require('../models/book');

const index = async(req, res) => {
    try {
        // const newBook = new ReadBook({
        //     user: req.user._id,
        //     book: req.body.book
        // });
        // await newBook.save();
        const readBooks = await ReadBook.find({ user: req.user._id }).select('book');
        console.log(readBooks);
        const readBookIds = readBooks.map(readBook => readBook.book);
        const books = await Book.find({ _id: { $in: readBookIds } });
        res.render('readbooks/index', {title: 'Books I have Read', books});
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    index
}