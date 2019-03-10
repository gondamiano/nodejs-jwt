const userService = require('../services/userService.js');
var customRouter = require('express').Router();


customRouter.get('/', (req, res) => {
	res.send("llego")
})

customRouter.use('/users', (req, res) => {
	console.log("placer");
	userService.getAllUser().then((data) => {
		res.send(data);
	}).catch((err) => {
		res.send(err);
	})
})

customRouter.get('/user/:id', (req, res) => {
	let userId = req.params.id;
	if(userId)
	userService.getUserById(userId).then((data) => {
		res.send(data)
	}).catch((err) => {
		res.send(" fallo mostro " + err);
	})
})

module.exports = customRouter;
