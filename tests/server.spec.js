var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../src/index.js");
var should = chai.should();

chai.use(chaiHttp);


describe("SERVER CONNECT TESTS", function() {

    it("Home page /get", function(done) {
        chai.request(server)
        .get("/")
        .end(function(err, res){
          res.should.have.status(200);
          done();
        });
    });

    it("Login page /get", function(done) {
      chai.request(server)
      .get("/login")
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });
});