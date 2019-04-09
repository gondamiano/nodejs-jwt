const authService = require('../services/authService');
var router = require('express').Router();
var config = require('../../config/config.js');
var fs = require('fs');

router.post('/register', async (req, res) => {
	data = req.body;
	console.log(data);
	authService.register(data).then((data) => {
		res.status(200).send(data);
	})
	.catch((err) => {
		console.log("That email is already register");
		res.status(409).send(err);
	})
})

router.get('/images', (req, res) => {
	console.log(__dirname);

	let images = fs.readdirSync(config.staticFolder + '/images');
	images = images.map(item => config.clientImagePath + '/' + item);
	if(images !== undefined) {
		res.send(images);
	}
	else res.send(400).send('images not found');
})

router.post('/login', async (req, res) => {
	const { email , password } = req.body;

	if(!email || !password) {
		res.status(400).send("Email or password incorrect");
	}

	const user = authService.login(email, password);
	res.status(200).send(user);

})

module.exports = router;
