var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.create = function (req, res) {
	// console.log('post here')
	var user = new User(req.body);
	// console.log('user',user)
	user.save(function (err,newUser){
		if (err){
			console.error(err);
			res.json({error:err.name},500);
		}

		res.json(newUser);
	});
};

module.exports.list = function (req, res) {
	User.find(function(err,users,count){
		if(err){
			console.err(err);
			res.json({error:err.name},500);
		}
		res.json({users:users});
	});
};

module.exports.show = function (req, res) {
	// console.log('coming show',req.params.lname);
	User.find({lname:req.params.lname},function(err,user){
		if(err){
			console.err(err);
			res.json({error:err.name},500);
		}
		res.json(user);
	});
};

module.exports.update = function (req, res) {
	// console.log('req fname',req.body.update_fname);
	User.findOne({fname:req.body.update_fname},function(err,user){
		if(err){
			console.err(err);
			res.json({error:err.name},500);
		}
		
		user.lname = req.body.update_lname;
		user.updated = Date.now();

		user.save(function(err,updatedUser){
			if(err){
				console.err(err);
				res.json({error:err.name},500);
			}

			res.json(updatedUser);
		});

		res.json(user);
		
	});
};

module.exports.destory = function (req, res) {
	// console.log('req fname',req.params);
	User.findOne({fname:req.body.delete_fname,lname:req.body.delete_lname},function(err,user){
		if(err){
			console.err(err);
			res.json({error:err.name},500);
		}
		// console.log('user',user);
		user.remove(function(err,removedUser){
			if(err){
				console.err(err);
				res.json({error:err.name},500);
			}

			res.json(removedUser);
		});
		
	});
};