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
	console.log('post here')
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

module.exports.D3js_01_paths = function (req, res) {
  
	var JsonData = fs.readFile("./D3Js_Learning/us-states.json","utf8",function(err, data){	
	  // res.setHeader('Content-Type', 'application/json');
	  // res.end(data);

	  res.render('01_paths');		
	});

  // res.render('01_paths',{
  // 	jsonData: JsonData
  // });
  // res.send("The time is "+ new Date().toString());
};

module.exports.D3js_02_projection = function (req, res) {
  
	var JsonData = fs.readFile("./D3Js_Learning/us-states.json","utf8",function(err, data){	
	  // res.setHeader('Content-Type', 'application/json');
	  // res.end(data);

	  res.render('02_projection');		
	});

};

module.exports.D3js_03_scaled = function (req, res) {
  
	var JsonData = fs.readFile("./D3Js_Learning/us-states.json","utf8",function(err, data){	
	  // res.setHeader('Content-Type', 'application/json');
	  // res.end(data);

	  res.render('03_scaled');		
	});

};
module.exports.D3js_04_fill = function (req, res) {
  
	var JsonData = fs.readFile("./D3Js_Learning/us-states.json","utf8",function(err, data){	
	  // res.setHeader('Content-Type', 'application/json');
	  // res.end(data);

	  res.render('04_fill');		
	});

};
module.exports.D3js_05_choropleth = function (req, res) {
  
	var JsonData = fs.readFile("./D3Js_Learning/us-states.json","utf8",function(err, data){	
	  // res.setHeader('Content-Type', 'application/json');
	  // res.end(data);

	  res.render('05_choropleth');		
	});

};
module.exports.D3js_06_points = function (req, res) {
  
	var JsonData = fs.readFile("./D3Js_Learning/us-states.json","utf8",function(err, data){	
	  // res.setHeader('Content-Type', 'application/json');
	  // res.end(data);

	  res.render('06_points');		
	});

};
module.exports.D3js_07_points_sized = function (req, res) {
  
	var JsonData = fs.readFile("./D3Js_Learning/us-states.json","utf8",function(err, data){	
	  // res.setHeader('Content-Type', 'application/json');
	  // res.end(data);

	  res.render('07_points_sized');		
	});

};
module.exports.D3js_08_oceans = function (req, res) {
  
	var JsonData = fs.readFile("./D3Js_Learning/us-states.json","utf8",function(err, data){	
	  // res.setHeader('Content-Type', 'application/json');
	  // res.end(data);

	  res.render('08_oceans');		
	});

};
module.exports.D3js_09_mercator = function (req, res) {
  
	var JsonData = fs.readFile("./D3Js_Learning/us-states.json","utf8",function(err, data){	
	  // res.setHeader('Content-Type', 'application/json');
	  // res.end(data);

	  res.render('09_mercator');		
	});

};
