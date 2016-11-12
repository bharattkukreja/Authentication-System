var mongoose = require('mongoose');
var db = mongoose.connection;

// User
var UserSchema = mongoose.Schema({
	username: {
		type: String,
	},
	password: {
		type: String
	},
	email: {
		type: String
	},
	name: {
		type: String
	},
	profileImage: {
		type: String
	}

});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback) {
	newUser.save(callback);
}
