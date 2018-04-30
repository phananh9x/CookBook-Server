var mongoose = require('mongoose'),
  	Comment = mongoose.model('Comment');

exports.get = function(req, res) {
  Comment.find({ foodId : req.params.foodId }, function(err, data) {
    if (err) 
      return res.status(400).send({
        success: false, 
        results: null,
        message: err
      });
    return res.send({success: true, results: data});
  });
};

exports.create = function(req, res) {
  req.body.foodId =  req.params.foodId;
  var newComment = new Comment(req.body);
  newComment.save(function(err, comment) {
    if (err)
     return res.status(400).send({
        success: false, 
        results: null,
        message: err
      });
    return res.send({success: true, results: comment});
  });
};