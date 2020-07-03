var mongoose = require('mongoose');

var StatesSchema = mongoose.Schema({
    state_name: {
      type:String,
      index:true
    }
  });

var State = module.exports = mongoose.model('State', StatesSchema);

module.exports.getAllStates = function(callback){
    State.find({}, callback);
}

module.exports.addNewState = function(state, callback){
    state.save(callback);
}