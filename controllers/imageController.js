var mongoose = require('mongoose'),
  	Image = mongoose.model('Image');

exports.get = function(req, res, next) {
  	Image.findById(req.params.imageId, function (err, data) {
	  if (err) 
		return res.status(400).send({
			statusCode: 400, 
			result: null,
			message: err
		});
	  return res.send({statusCode: 200, result: data});
	});
};

exports.create = function(req, res, next) {
  	var img = new Image (req.files[0]);
	console.log(req.files, 'files');
	img.save(function(err, data) {
    if (err) 
    	return res.status(400).send({
			statusCode: 400, 
			result: null,
			message: err
		});
    return res.send({statusCode: 200, result: data});
  });
};