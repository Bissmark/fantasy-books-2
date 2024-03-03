const express = require('express');
const router = express.Router();

const booksController = require('../controllers/books');

router.get('/', booksController.index);
router.get('/new', booksController.new);
router.get('/:id', booksController.show);
router.post('/', booksController.create);
router.get('/:id/edit', booksController.edit);
router.put('/:id', booksController.update);
router.delete('/:id', booksController.delete);

module.exports = router;