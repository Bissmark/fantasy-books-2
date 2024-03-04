const Book = require('../models/book');

const create = async(req, res) => {
    const book = await Book.findById(req.params.id);

    req.body.user = req.user._id;
    req.body.userName = req.user.name;

    book.reviews.push(req.body);
    try {
        await book.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/books/${book._id}`);
};

const deleteReview = async(req, res) => {
    const book = await Book.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id });

    if (!book) return res.redirect('/books');
    book.reviews.remove(req.params.id);
    await book.save();
    res.redirect(`/books/${book._id}`);
};

const update = async(req, res) => {
    const book = await Book.findById(req.params.id);
    const review = book.reviews.id(req.params.reviewId);
    review.set(req.body);
    await book.save();
    res.redirect(`/books/${book._id}`);
}

module.exports = {
    create,
    delete: deleteReview,
    update
}