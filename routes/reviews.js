const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviews');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.post('/books/:id/reviews', ensureLoggedIn, reviewsController.create);
router.delete('/reviews/:id', reviewsController.delete);
router.put('/books/:id/reviews/:reviewId', reviewsController.update);

module.exports = router;