var express = require('express');
var router = express.Router();

var ChildModel = require('../models/childsModel');

router.post('/child-profile-create', function(req, res) {
  var name = req.body.name;
  var sex = req.body.sex;
  var dob = req.body.dob;
  var fatherName = req.body.fathername;
  var motherName = req.body.mothername;
  var districtId = req.body.districtid;
  var photo = req.body.photo;

  var child = new ChildModel({
        name: name,
        sex: sex,
        dob: dob,
        father_name: fatherName,
        mother_name: motherName,
        district_id: districtId,
        photo: photo
    });

    ChildModel.addNewChildProfile(child, function(err, child) {
    if(err) throw err;
    console.log(child);
    })
});

router.get('/get-child-profile', function(req, res) {
    ChildModel.getAllChildProfile(function(err, child) {
        if(err) throw err;
        console.log(child);
    })
});

module.exports = router;
