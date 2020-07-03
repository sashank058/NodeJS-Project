var mongoose = require('mongoose');

var DistrictSchema = mongoose.Schema({
    state_id: {
      type:Number
    },
    district_name: {
        type:String,
        index:true
    }
  });

var District = module.exports = mongoose.model('District', DistrictSchema);

module.exports.getDistrictByStateId = function(id, callback){
    query = {state_id: id};
    District.find(query, callback);
}

module.exports.addNewDistrict = function(district, callback){
    district.save(callback);
}
