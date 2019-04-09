const storeService = require("../services/storeService.js");
var router = require('express').Router();

router.get('/', (req, res) => {
	storeService.getAllStore().then((data) => {
		res.send(data);
	})
	.catch(err => {
		res.status(409).send(err);
	});
});

router.get('/names', (req, res) => {
	storeService.getStoreName().then((data) => {
		res.send(data);
	})
	.catch((err) => {
		res.status(409).send(err);
	})
})

module.exports = router;
