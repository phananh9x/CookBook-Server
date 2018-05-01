var mongoose = require('mongoose'),
	config = require('../config'),
  	jwt = require('jsonwebtoken'),
  	bcrypt = require('bcrypt'),
  	User = mongoose.model('User');

exports.register = function(req, res) {
  var newUser = new User(req.body);
  newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
  newUser.save(function(err, user) {
    if (err)
      return res.status(500).send({
        success: false,
        results: null,
        message: err
      });
    user.hash_password = undefined;
    return res.send({success: true, results: user});
  });
};

exports.sign_in = function(req, res) {
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err)
      return res.status(500).send({
        success: false,
        results: null,
        message: err
      });
    if (!user || !user.comparePassword(req.body.password)) {
      return res.status(500).send({
        success: false,
        results: null,
        message: 'Authentication failed. Invalid user or password.'
      });
    }
    return res.send({success: true, results: {
      token: jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id, phone: user.phone, address: user.address, gender:user.gender,birthday:user.birthday },
      config.secret) ,
      fullName:user.fullName,
      _id: user._id,
      email: user.email,
			phone: user.phone,
			address: user.address,
			gender: user.gender,
			birthday: user.birthday}});
  });
};

exports.update = function(req, res) {
  User.findOneAndUpdate({_id : req.params.userId}, req.body, {new: true}, function (err, data) {
    if (err)
      return res.status(400).send({
        success: false,
        results: null,
        message: err
      });
    return res.send({success: true, results: data});
  });
};


exports.delete = function(req, res) {
  User.findByIdAndRemove({_id : req.params.userId}, function (err, data) {
    if (err)
      return res.status(400).send({
        success: false,
        results: null,
        message: err
      });
    return res.send({success: true, results: data});
  });
};



exports.loginRequired = function(req, res, next) {
  if (req.user) {
    next();
  } else {
    return res.status(500).send({
      success: false,
      results: null,
      message: 'Unauthorized user!'
    });
  }
};
