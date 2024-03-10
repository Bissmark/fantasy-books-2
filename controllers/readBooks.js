const Book = require('../models/book');

const index = async(req, res) => {
    try {
        const books = await Book.find({}).sort({ createdAt: -1 });
        res.render('readbooks/index', {title: 'Books I have Read', books});
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    index
}