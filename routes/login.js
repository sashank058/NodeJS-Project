var express = require('express');
var router = express.Router();

var LoginModel = require('../models/loginModel');

/* GET login page. */
router.post('/login', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  req.checkBody('username', 'Username is required').notEmpty();
  req.checkBody('password', 'Password is required').notEmpty();

  var errors = req.validationErrors();

  if(!errors) {
      var user = new LoginModel({
          username: username,
          password: password
      });

      LoginModel.findByUsernameAndPassword(user, function(err, user) {
        if(err) throw err;
        console.log(user);
      })
  }
});

router.get('/logout', function(req, res) {
  req.logout();
});

module.exports = router;
