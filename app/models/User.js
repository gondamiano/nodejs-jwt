const bcrypt = require('bcrypt');

module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('users', {
		id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
		first_name: {type: Sequelize.STRING, allowNull: false},
		last_name: {type: Sequelize.STRING, allowNull: false},
		email: {type: Sequelize.STRING, allowNull: false, validate: {isEmail: true}, unique: true},
		password:  {type: Sequelize.STRING, allowNull: false},
		created:  {type: Sequelize.DATE, defaultValue: Sequelize.NOW, allowNull: false},
		modified:  {type: Sequelize.DATE},
		},
		{
			timestamps: false,
			getterMethods: {
				fullName: function() {
					return ` ${this.first_name} ${this.last_name}`;
				}
			},
			setterMethods: {
				fullName: function(fullname) {
					var split = fullname.split('');
					this.firstName = split[0];
					this.lastName = split[1];
					}
				},
		}
	);

	User.associate = function({ authToken }) {
		User.hasMany(authToken);
	};

	User.authenticate = async function(email, password) {

		const user = await User.findOne({ where : { email }});

		if(!user) { throw new Error("Couldn't find user with that email");}

		if(bcrypt.compareSync(password, user.password)) {
			return user.authorize();
		}

		throw new Error('Invalid password');
	};

	User.prototype.authorize = async function() {
		const { authToken } = sequelize.models;
		const user = this;

		const AuthToken = await authToken.generate(user.id);

		await user.addAuthToken(AuthToken);

		return { user, AuthToken };
	};


	return User;
}
