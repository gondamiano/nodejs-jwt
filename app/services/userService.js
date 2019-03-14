const User = require('../models/user-model.js')

var userService = {
	getAllUser: getAllUser,
	getUserById: getUserById,
}

function getAllUser() {
	return new Promise((resolve, reject) => {
		User.getAllUser().then((data) => {
			resolve(data);
		}).catch((err) => {
			reject(err);
		})
	})
}

function getUserById(id) {
	return new Promise((resolve, reject) => {
		User.getUserById(id).then((data) => {
			resolve(data);
		}).catch((err) => {
			reject(err);
		})
	})
}

module.exports = userService;
