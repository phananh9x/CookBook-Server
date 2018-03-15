var mongoose = require('mongoose'),
  	Category = mongoose.model('Category');

exports.get = function(req, res) {
  Category.find({}, function(err, data) {
    if (err) throw err;
    return res.json(data);
  });
};

exports.create = function(req, res) {
  var newCategory = new Category(req.body);
  newCategory.save(function(err, category) {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      return res.json(category);
    }
  });
};
