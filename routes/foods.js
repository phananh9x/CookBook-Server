var express = require('express');
var router = express.Router();
var	userHandlers = require('../controllers/userController.js');
var	foodHandlers = require('../controllers/foodController.js');
/* GET home page. */
router.get('/:categoryId',userHandlers.loginRequired, foodHandlers.get);
router.post('/:categoryId/create',userHandlers.loginRequired, foodHandlers.create);
// router.post('/:categoryId/update/:foodId',userHandlers.loginRequired, foodHandlers.update);
// router.post('/:categoryId/delete/:foodId',userHandlers.loginRequired, foodHandlers.delete);

router.get('/:foodId',userHandlers.loginRequired, foodHandlers.getDetail);
router.post('/:foodId/updateFavourite',userHandlers.loginRequired, foodHandlers.updateFavourite);

module.exports = router;
