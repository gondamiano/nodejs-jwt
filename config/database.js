var mysql = require('mysql');
var config = require('./config.js');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize.authenticate().then(() => {
    console.log('connection succesfully');
})
.catch((err) => {
    console.log('mm fallo');
})

/*
 var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'localhost',
	database: 'sampledb',
})

connection.connect((err) => {
	if(!err) console.log("funciona! Conectado a mysql 8.0");
	else
	 console.log("error con la base de datos : " + err);
})
*/


module.exports = {
    sequelize,
    Sequelize,
}
