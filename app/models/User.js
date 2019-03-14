module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('users', {
		id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
		first_name: {type: Sequelize.STRING, allowNull: false},
		last_name: {type: Sequelize.STRING, allowNull: false},
		email: {type: Sequelize.STRING, allowNull: false, validate: {isEmail: true}},
		password:  {type: Sequelize.STRING, allowNull: false},
		created:  {type: Sequelize.DATE, defaultValue: Sequelize.NOW, allowNull: false},
		modified:  {type: Sequelize.DATE},
		},
		{
		timestamps: false,
		}
	);

	return User;
}
