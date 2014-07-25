// var settings = require('../ettings'),
//     Db = require('mongodb').Db,
//     Connection = require('mongodb').Connection,
//     Server = require('mongodb').Server;
// module.exports = new Db(settings.db, new Server(settings.host, Connection.DEFAULT_PORT), {safe: true});

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mydbtest');

mongoose.connection.on('error',function(err){
	console.log(err)
});

mongoose.connection.once('open',function(){
	console.log('DB connection established');
});

require('./models/user');