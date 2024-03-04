const express = require('express');
const router = express.Router();
const readBooksController = require('../controllers/readBooks');

router.get('/', readBooksController.index);

module.exports = router;