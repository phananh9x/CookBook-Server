var mongoose = require('mongoose'),
  	Image = mongoose.model('Image');

exports.get = function(req, res, next) {
  	Image.findById(req.params.imageId, function (err, result) {
	  if (err) return next(err);
	  res.json(result);
	});
};

exports.create = function(req, res, next) {
  	var img = new Image (req.files[0]);
	console.log(req.files, 'files');
	img.save(function(err, img) {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      return res.json(img);
    }
  });
};