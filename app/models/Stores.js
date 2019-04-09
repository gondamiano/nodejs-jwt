

module.exports = (sequelize, Sequelize) => {
	const Stores = sequelize.define('stores', {
		id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
		name: {type: Sequelize.STRING, allowNull: false, isUnique: true},
		phone: {type: Sequelize.INTEGER},
		address: {type: Sequelize.STRING},
		delivery: {type: Sequelize.BOOLEAN},
		email: {type: Sequelize.STRING},
		waitTime: {type: Sequelize.INTEGER},
	}, {
		timestamps: false,
	});

	Stores.associate = function({menu}) {
		Stores.hasMany(menu);
	}

	return Stores;
};
