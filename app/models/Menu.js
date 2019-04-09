

module.exports = (sequelize, Sequelize) => {
	const Menu = sequelize.define('menu', {
		id : {type: Sequelize.INTEGER, primaryKey: true ,autoIncrement: true },
		store_id: {type: Sequelize.INTEGER, unique: false},
		food_name: {type: Sequelize.STRING, allowNull: false},
		price: {type: Sequelize.INTEGER}
	}, {
		timestamps: false,
		classMethods: {
			associate: function(models) {
				Menu.belongsTo(models.Stores)
			}
		}
	});

	return Menu;
}
