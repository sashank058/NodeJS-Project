var mongoose = require('mongoose');

var LoginSchema = mongoose.Schema({
    username:{
      type:String,
      index:true
    },
    password: {
      type:String
    }
  });

var User = module.exports = mongoose.model('User', LoginSchema);

module.exports.findByUsernameAndPassword = function(user, callback){
    var query = {username: user.username, password: user.password};
    User.findOne(query, callback);
}