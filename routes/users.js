'use strict';
var express = require('express');
var router = express.Router();
var	userHandlers = require('../controllers/userController.js');
 
/* GET users listing. */
router.post('/register', userHandlers.register);
router.post('/sign_in', userHandlers.sign_in);

module.exports = router;