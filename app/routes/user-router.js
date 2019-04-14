const userService = require('../services/userService.js');
var router = require('express').Router();

//// middleware function for logging and stuff
router.use((req, res, next) => {
	console.log(`${new Date().toDateString()} ${new Date().toLocaleTimeString()} Request:  ${req.method} ${req.url}  `);
	next();
});

router.get('/', (req, res) => {
	userService.getAllUser().then((data) => {
		res.send(data);
	}).catch((err) => {
		res.send(err);
	})
})

router.get('/:id', (req, res) => {
	let userId = req.id;
	if(userId)
	userService.getUserById(userId).then((data) => {
		if(data) {
			res.status(200).send(data)
		}
		else {
			res.status(404).send("Error");
		}
	}).catch((err) => {
		res.status(500).send(err);
	})
})


//validate the parameter before the request
router.param('id', (req, res, next, id) => {
	// here the validation
	console.log(`Checking user information with id: ${id} `);
	req.id = id,
	next();
})

module.exports = router;
