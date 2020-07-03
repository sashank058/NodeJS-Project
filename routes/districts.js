var express = require('express');
var router = express.Router();

var DistrictModel = require('../models/districtsModel');

router.post('/create', function(req, res) {
  var stateId = req.body.stateid;
  var districtName = req.body.districtname;

  req.checkBody('stateId', 'State Id is required').notEmpty();
  req.checkBody('districtName', 'District Name is required').notEmpty();

  var errors = req.validationErrors();

  if(!errors) {
      var district = new DistrictModel({
          state_id: stateId,
          district_name: districtName
      });

      DistrictModel.addNewDistrict(district, function(err, district) {
        if(err) throw err;
        console.log(district);
      })
  }
});

router.get('/get-district', function(req, res) {
    var stateId = req.params.state_id;
    DistrictModel.getDistrictByStateId(stateId, function(err, state) {
        if(err) throw err;
        console.log(state);
    })
});

module.exports = router;
