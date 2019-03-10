const userModel = require('../models/user-model.js')

var userService = {
	getAllUser: getAllUser,
	getUserById: getUserById,
}

function getAllUser() {
	return new Promise((resolve, reject) => {
		userModel.getAllUser().then((data) => {
			resolve(data);
		}).catch((err) => {
			reject(err);
		})
	})
}

function getUserById(id) {
	console.log(id);
	return new Promise((resolve, reject) => {
		userModel.getUserById(id).then((data) => {
			resolve(data);
		}).catch((err) => {
			reject(err);
		})
	})
}

module.exports = userService;
