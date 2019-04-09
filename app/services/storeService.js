const db = require('../models');

const storeService = {
	getAllStore: getAllStore,
	getStoreName: getStoreName,
};

function getAllStore() {
	return new Promise((resolve, reject) => {
		console.log("Entering get get all stores");
		db.stores.findAll()
			.then((data) => {
				resolve(data);
			})
			.catch((err) => {
				throw new Error("fallo" + err)
			})
	});
}

function getStoreName() {
	return new Promise((resolve, reject) => {
		console.log("Entering get store names");
		db.stores.findAll({ attributes: ["id", "name"]})
			.then((data) => {
				console.log(data);
				resolve(data);
			})
			.catch((err) => {
				console.log("fallo");
				throw new Error("fallo" + err);
			})
	})
}

module.exports = storeService;
