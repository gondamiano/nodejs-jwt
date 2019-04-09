const { users } = require('../models');
const bcrypt = require('bcrypt');

const authService = {
	register: register,
	login: login,
}

function register(data) {
	return new Promise((resolve, reject) => {
		const hash = bcrypt.hashSync(data.password, 10);
		let user = users.create(
			Object.assign(data, {first_name: data.firstname, last_name: data.lastname, created: new Date(), password: hash})
		).then((user) => {
			console.log(".........." + user);
			resolve(user);
		})
		.catch((err) => {
			console.log(".........." + err);
			reject(err);
		})
	})
}

function login(email, password) {
	console.log("-----------" + email + password);
	return new Promise((resolve, reject) => {
		users.authenticate(email, password).then(data => {
			 return data;
		 })
		.catch(err => {console.log(err);});
	})
}

module.exports = authService
