var db = require('../../config/database');

var userModel = {
	getAllUser: getAllUser,
	getUserById: getUserById,
}

function getAllUser() {
	return new Promise((resolve,reject) => {
		db.query('SELECT * FROM users', (err, rows, fields) => {
			if(err) {
				reject(err);
			} else {
				resolve(rows);
			}
		})
	})
}

function getUserById(id) {
	return new Promise((resolve, reject) => {
		db.query(`SELECT * from users WHERE id = ${id}`, (err, rows, fields) => {
			if(err) {
				reject(err);
			}
			else {
				resolve(rows);
			}
		})
	})
}

module.exports = userModel
