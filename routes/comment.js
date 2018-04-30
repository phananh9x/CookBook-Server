'use strict';
var express = require('express');
var router = express.Router();
var	userHandlers = require('../controllers/userController.js');
var	commentHandlers = require('../controllers/commentController.js');
 
/* GET users listing. */
router.get('/:foodId', userHandlers.loginRequired, commentHandlers.get);
router.post('/:foodId/create', userHandlers.loginRequired, commentHandlers.create);

module.exports = router;