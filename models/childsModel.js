var mongoose = require('mongoose');

var ChildSchema = mongoose.Schema({
    name: {
      type:String,
      index:true
    },
    sex: {
        type:String
    },
    dob: {
        type:String
    },
    father_name: {
        type:String
    },
    mother_name: {
        type:String
    },
    district_id: {
        type:Number
    },
    photo: {
        type:String
    }
  });

var Child = module.exports = mongoose.model('Child', ChildSchema);

module.exports.getAllChildProfile = function(callback){
    District.find({}, callback);
}

module.exports.addNewChildProfile = function(child, callback){
    child.save(callback);
}