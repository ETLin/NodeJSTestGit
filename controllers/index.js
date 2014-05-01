var fs = require('fs');
var User = require('../models/user');

module.exports.index = function (req, res) {
  res.render('test',{
  	title:'1234'
  });
  // res.send("The time is "+ new Date().toString());
};

// module.exports.createUser = function (req, res) {
//   User.create(req.body, function (user) {
//     res.json(user);
//   });
// }

module.exports.hello = function (req, res) {
  res.send("The time is "+ new Date().toString());
};

module.exports.user = function (req, res) {

};

module.exports.post = function (req, res) {

};

module.exports.reg = function (req, res) {

};

module.exports.doReg = function (req, res) {

};

module.exports.login = function (req, res) {

};

module.exports.doLogin = function (req, res) {

};

module.exports.logout = function (req, res) {

};