var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();
const { users } = require('../app/models');

chai.use(chaiHttp);

describe('Users', function () {
	it('should list all users on / GET', function (done) {
		chai.request("http://localhost:2000")
			.get('/users')
			.end(function (err, res) {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('array');
				done();
			});
	});
	it('should return one user on /users/<id> GET', function (done) {
		var id = 1;
			chai.request("http://localhost:2000")
				.get(`/users/${id}`)
				.end(function (err, res) {
					if(err) {
						console.log("Error on test");
						done(err);
					}
					else {
						res.should.have.status(200);
						res.should.be.json;
						res.body.should.be.a('object');
						done();
					}
				});
	})
	it('should NOT get a user on /users/<id> GET', function (done) {
		var id = 2;
		chai.request("http://localhost:2000")
			.get(`/users/${id}`)
			.end(function (err, res) {
				res.should.have.status(404);
				done(err);
			});
	})
})
