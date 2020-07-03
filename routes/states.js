var express = require('express');
var router = express.Router();

var StateModel = require('../models/statesModel');

router.post('/create', function(req, res) {
  var stateName = req.body.statename;

  req.checkBody('stateName', 'Statename is required').notEmpty();

  var errors = req.validationErrors();

  if(!errors) {
      var state = new StateModel({
          state_name: stateName
      });

      StateModel.addNewState(state, function(err, state) {
        if(err) throw err;
        console.log(state);
      })
  }
});

router.get('/get-state', function(req, res) {
    StateModel.getAllStates(function(err, state) {
        if(err) throw err;
        console.log(state);
    })
  });

module.exports = router;
