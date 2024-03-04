const express = require('express');
const router = express.Router();
const listsController = require('../controllers/lists');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', listsController.index);
router.get('/new', ensureLoggedIn, listsController.new);
router.get('/new/bookstoread', ensureLoggedIn, listsController.newBooksToRead);
router.get('/new/bookshaveread', ensureLoggedIn, listsController.newBooksHaveRead);
router.get('/:id', listsController.show);
router.post('/', ensureLoggedIn, listsController.create);
// router.get('/:id/edit', listsController.edit);
// router.put('/:id', listsController.update);
// router.delete('/:id', listsController.delete);

module.exports = router;