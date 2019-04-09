var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
const mysql = require('mysql');
const http = require('http');
var db = require('./app/models/index.js');
var userRouter = require('./app/routes/user-router');
var storeRouter = require("./app/routes/stores.js");
var router = require('./app/routes/index.js');
const hostname = '127.0.0.1';
const port = 2000;

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

app.use(bodyParser.json());

app.use('/', router);
app.use('/users', userRouter);
app.use('/stores', storeRouter);

app.use(express.static(path.join(__dirname, 'public')))


db.sequelize.sync({ force: true }).then(() => {

	app.listen(port, hostname, () => {
		console.log('server running on port: ' + port);
	});
})
