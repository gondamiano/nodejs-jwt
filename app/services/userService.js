const db = require('../models');

var userService = {
	getAllUser: getAllUser,
	getUserById: getUserById,
}

//// Get all users
function getAllUser() {
	return new Promise((resolve, reject) => {
			console.log("estaaa" + db.users);
		db.users.findAll().then((users) => {
			resolve(users);
		})
		.catch(err => {
			throw new Error('Error : ' + err)
		})
	})
}


function getUserById(id) {
	return new Promise((resolve, reject) => {
		db.users.findByPk(id).then(user => {
			resolve(user.fullName);
		})
		.catch(err => {
			throw new Error('Error : ' + err)
		})
	})
}

module.exports = userService;
