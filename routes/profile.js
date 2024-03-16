const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile');

router.get('/', function(req, res, next) {
    res.render('profile/index', {title: 'Profile'});
});
router.get('/read', profileController.indexRead);
router.get('/notread', profileController.indexNotRead);

module.exports = router;