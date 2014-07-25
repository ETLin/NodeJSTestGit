var express = require('express');
var controllers = require('./controllers');
var user = require('./controllers/user');
require('./db');

var host = '127.0.0.1';
var port = 5000;

var app = express();

app
.configure(function(){
	app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');
	app.set('view options', { layout: false });
	app.use(express.bodyParser());
	app.use(express.methodOverride()); //????
	// app.use(app.router);
	app.use(express.static( __dirname + '/public'));
	app.use(express.static( __dirname + '/D3Js_Learning'));
});

app.configure('development', function(){
	app.use(express.errorHandler({ 
		dumpExceptions: true,
		showStack: true	
			}));
});

app.configure('production', function(){
	app.use(express.errorHandler());
});

app
.get('/', controllers.index)
.get('/hello',controllers.hello)
.get('/u/user',controllers.user)
.post('/post',controllers.post)
.get('/reg',controllers.reg)
.post('/reg',controllers.doReg)
.get('/login',controllers.login)
.post('/login', controllers.doLogin)
.post('/logout', controllers.logout)
.post('/create', user.create)
.get('/list',user.list)
.get('/show/:lname',user.show)
// .post('/update', user.update)
.put('/update', user.update)
// .get('/destory/:delete_fname', user.destory)
.delete('/destory', user.destory)
.get('/D3js_01_paths', controllers.D3js_01_paths)
.get('/D3js_02_projection', controllers.D3js_02_projection)
.get('/D3js_03_scaled', controllers.D3js_03_scaled)
.get('/D3js_04_fill', controllers.D3js_04_fill)
.get('/D3js_05_choropleth', controllers.D3js_05_choropleth)
.get('/D3js_06_points', controllers.D3js_06_points)
.get('/D3js_07_points_sized', controllers.D3js_07_points_sized)
.get('/D3js_08_oceans', controllers.D3js_08_oceans)
.get('/D3js_09_mercator', controllers.D3js_09_mercator)
.listen(port, host);

console.log("Express server listening on port %d",port);