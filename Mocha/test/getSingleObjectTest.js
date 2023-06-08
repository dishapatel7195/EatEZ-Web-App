var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

describe('Test Get single Restaurant result', function () {
//	this.timeout(15000);

	var requestResult;
	var response;
		 
    before(function (done) {
        chai.request("http://127.0.0.1:8080")
			.get("/app/restaurantList/:restaurantId")
			.end(function (err, res) {
				requestResult = res.body;
				response = res;
                expect(err).to.be.null;
                expect(res).to.have.status(200);
				done();
			});
        });

	it('Testing the object by using assert', function(){
	    assert.isObject(response, 'is array of objects');
		assert.notStrictEqual(response.body.length, 1, "We can give message with assert");
	});
	

	it('The elements in the array have the expected properties', function(){
		expect(response.body).to.satisfy(
			function (body) {
				for (var i = 0; i < body.length; i++) {
					expect(body[i]).to.have.property('restaurantName');
					expect(body[i]).to.have.property('restaurantAddress');
					expect(body[i]).to.have.property('_id');
				  expect(body[i]).to.have.property('restaurantImageUrl');
					
				}
				return true;
			});
	});	
	
});

// it('Should return an array object with more than 1 object', function (){
//   expect(response).to.have.status(404);
//   expect(response.body).to.have.length.above(2);
//   expect(response).to.have.headers;
//   });