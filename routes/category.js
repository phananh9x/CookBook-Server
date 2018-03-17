'use strict';
var express = require('express');
var router = express.Router();
var	userHandlers = require('../controllers/userController.js');
var	categoryHandlers = require('../controllers/categoryController.js');


router.get('/', userHandlers.loginRequired, categoryHandlers.get);
router.post('/create', userHandlers.loginRequired, categoryHandlers.create);
// router.post('/update', userHandlers.loginRequired, categoryHandlers.update);
// router.post('/delete', userHandlers.loginRequired, categoryHandlers.delete);

module.exports = router;
