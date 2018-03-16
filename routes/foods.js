var express = require('express');
var router = express.Router();
var	userHandlers = require('../controllers/userController.js');
var	foodHandlers = require('../controllers/foodController.js');
/* GET home page. */
router.get('/:companyId',userHandlers.loginRequired, foodHandlers.get);
router.post('/:companyId/create',userHandlers.loginRequired, foodHandlers.create);
router.put('/:companyId/update/:foodId',userHandlers.loginRequired, foodHandlers.update);
router.delete('/:companyId/delete/:foodId',userHandlers.loginRequired, foodHandlers.delete);

module.exports = router;
