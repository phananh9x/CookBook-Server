var mongoose = require('mongoose'),
  	Food = mongoose.model('Food');

exports.get = function(req, res) {
  Food.find({ categoryId : req.params.categoryId }, function(err, data) {
    if (err) 
      return res.status(400).send({
        statusCode: 400, 
        result: null,
        message: err
      });
    return res.send({statusCode: 200, result: data});
  });
};

exports.create = function(req, res) {
  var newFood = new Food(req.body);
  newFood.save(function(err, food) {
    if (err)
     return res.status(400).send({
        statusCode: 400, 
        result: null,
        message: err
      });
    return res.send({statusCode: 200, result: food});
  });
};

exports.update = function(req, res) {
  Food.findOneAndUpdate({_id : req.params.foodId}, req.body, function (err, data) {
    if (err) 
      return res.status(400).send({
        statusCode: 400, 
        result: null,
        message: err
      });
    return res.send({statusCode: 200, result: data});
  });
};

exports.detele = function(req, res) {
  Food.findOneAndDelete({_id : req.params.foodId}, function (err, data) {
    if (err) 
      return res.status(400).send({
        statusCode: 400, 
        result: null,
        message: err
      });
    return res.send({statusCode: 200, result: data});
  });
};

//food Detail
exports.getDetail = function(req, res) {
  Food.findOne({ _id : req.params.foodId }, function(err, data) {
    if (err) 
      return res.status(400).send({
        statusCode: 400, 
        result: null,
        message: err
      });
    return res.send({statusCode: 200, result: data});
  });
};

// updateFavourite
exports.updateFavourite = function(req, res) {
  Food.findOneAndUpdate({_id : req.params.foodId}, req.body, function (err, data) {
    if (err) 
      return res.status(400).send({
        statusCode: 400, 
        result: null,
        message: err
      });
    return res.send({statusCode: 200, result: data});
  });
};
