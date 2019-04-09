const crypto = require('crypto');

module.exports = (sequelize, Sequelize) => {
	const AuthToken = sequelize.define('authToken', {
		token: Sequelize.STRING,
	}, {
		timestamps: false,
		classMethods: {
			associate: function(models) {
				AuthToken.belongsTo(models.User);
			}
		}
	});

	AuthToken.generate = async function(UserId) {
		if(!UserId) {
			throw new Error('Error en generate authtoken');
		}

		let token = '';
		////// TODO:  CHEQUEAR DE QUE FORMA SE GUARDA EN LA BASE EL TOKEN. EN QUE FORMATO GENERARLO.
		await crypto.randomBytes(48, (err, buffer) => {
			if(err) {
				console.log("Error al generar el TOKEN");
				throw new Error("TODO SE ACABO SE SEñORES");
			}
			token = buffer.toString();
			console.log("ACA ESTA ESTAOOOOO :" +  UserId);
			return AuthToken.create({ token, userId: UserId })
		})
	}

	return AuthToken;
};
