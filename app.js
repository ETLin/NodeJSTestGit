var express = require('express');
var controllers = require('./controllers')

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
.listen(port, host);

console.log("Express server listening on port %d",port);