var mongoose = require('mongoose'),
  	Image = mongoose.model('Image');

exports.get = function(req, res, next) {
  	Image.findById(req.params.imageId, function (err, data) {
	  if (err) 
		return res.status(400).send({
			success: false, 
			results: null,
			message: err
		});
	  return res.send({success: true, results: data});
	});
};

exports.create = function(req, res, next) {
  	var img = new Image (req.files[0]);
	console.log(req.files, 'files');
	img.save(function(err, data) {
    if (err) 
    	return res.status(400).send({
			success: false, 
			results: null,
			message: err
		});
    return res.send({success: true, results: data});
  });
};