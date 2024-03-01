const express = require('express');
const router = express.Router();

const booksController = require('../controllers/books');

router.get('/', booksController.index);
router.get('/new', booksController.new);
router.post('/', booksController.create);

module.exports = router;