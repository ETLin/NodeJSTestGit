var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  fname:{type:String, required:true},
  lname:{type:String, required:true},
  created:{type:Date,default:Date.now},
  updated:Date
});

var User = mongoose.model('User',UserSchema);