var mongoose = require('mongoose'),
  	Category = mongoose.model('Category');

exports.get = function(req, res) {
  Category.find({}, function(err, data) {
    if (err) {
      return res.status(400).send({
          success: false, 
          results: null,
          message: err
        });
      }
    return res.send({success: true, results: data});
  });
};

exports.create = function(req, res) {
  var newCategory = new Category(req.body);
  newCategory.save(function(err, category) {
    if (err) {
      return res.status(400).send({
        success: false, 
        results: null,
        message: err
      });
    } else {
      return res.send({success: true, results: category});
    }
  });
};
