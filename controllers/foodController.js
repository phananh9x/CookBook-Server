var mongoose = require('mongoose'),
  	Food = mongoose.model('Food');

exports.get = function(req, res) {
  Food.find({ companyId : req.params.companyId }, function(err, data) {
    if (err) throw err;
    return res.json(data);
  });
};

exports.create = function(req, res) {
  var newFood = new Food(req.body);
  newFood.save(function(err, category) {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      return res.json(category);
    }
  });
};

exports.update = function(req, res) {
  Food.findOneAndUpdate({_id : req.param.foodId}, req.body, function (err, data) {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      return res.json(data);
    }
  });
};

exports.detele = function(req, res) {
  Food.findOneAndDelete({_id : req.param.foodId}, function (err, data) {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      return res.json("delete successful!");
    }
  });
};
