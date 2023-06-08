var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

describe('Post Restaurant result', function () {
//	this.timeout(15000);

    var requestResult;
    var response;

    before(function (done) {
        chai.request("http://127.0.0.1:8080")
            .post("/app/addRestaurant")
            .send({_id: "10",restaurantName : "Dominoes",restaurantAddress : "112 1st Ave S Ste 100, Seattle, WA 98104", phoneNumber :"+1 2064450999", restaurantImageUrl : "https://pbs.twimg.com/profile_images/692257370852954112/nzlFEayV_400x400.png" })
            .end(function (err, res) {
                requestResult = res.body;
                response = res;
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
    });

    it('Should return an array of restaurants with all the objects', function (){
        expect(response.body).to.satisfy(
            function (body) {
                for (var i = 0; i < body.length; i++) {
                    expect(body[i]).to.have.property('_id');
                    expect(body[i]).to.have.property('restaurantName');
                    expect(body[i]).to.have.property('restaurantAddress');
                    expect(body[i]).to.have.property('phoneNumber');
                    expect(body[i]).to.have.property('restaurantImageUrl');
                }
                return true;
            });
    });

});
