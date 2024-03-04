const express = require('express');
const router = express.Router();
const upload = require('../utilities/multer');
const booksController = require('../controllers/books');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', booksController.index);
router.get('/new', ensureLoggedIn, booksController.new);
router.get('/:id', booksController.show);
router.post('/', ensureLoggedIn, upload.single('image'), booksController.create);
router.get('/:id/edit', booksController.edit);
router.put('/:id', booksController.update);
router.delete('/:id', booksController.delete);
router.post('/:id/read', ensureLoggedIn, booksController.markAsRead);

module.exports = router;