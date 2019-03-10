var mysql = require('mysql');

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

module.exports = connection;
