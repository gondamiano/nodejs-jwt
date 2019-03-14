const {sequelize, Sequelize} = require('../../config/database');

module.exports = function(sequelize, Sequelize) {
	const User = sequelize.define('users', {
		id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
		first_name: {type: Sequelize.STRING, allowNull: false},
		last_name: {type: Sequelize.STRING, allowNull: false},
		email: {type: Sequelize.STRING, allowNull: false, validate: {isEmail: true}},
		password:  {type: Sequelize.STRING, allowNull: false},
		created:  {type: Sequelize.DATE, defaultValue: Sequelize.NOW, allowNull: false},
		modified:  {type: Sequelize.DATE},
		}, {
		timestamps: false,
	});

	User.Instance.prototype.getAllUser = function() {
			return User.findAll().then((users) => {
				return users;
			})
			.catch(err => {
				throw new Error('Error : ' + err)
			})
	}

	User.Instance.prototype.getUserById = function(id) {
		return User.findByPk(id).then(user => {
			return user;
		})
		.catch(err => {
			throw new Error('Error : ' + err)
		})
	}

	return User;
}
