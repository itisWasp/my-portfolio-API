import path from "path";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import mocha from "mocha";
import request from "supertest";
import User from "../src/models/UsersModel";
import app from "../src/app";
import mockdata from "./mockdata";
const { it, describe, beforeEach, afterEach } = mocha;

chai.should();

chai.use(chaiHttp);

const userLogin2 = {
  Email:"andela@andela.com",
  Password:"Andelhfjhfj"
};

const tempLogin = {
    Email: "test@test.com",
    Password: "1234567890",
}

const userRegister = {
    UserName:"kevinNew",
    Email:"janesmith12@andela.com",
    Password:"Andelahfghfh"
};

describe("Register & login", () => {




describe("Post /api/register", () => {
    it("It Should Register a user", (done) => {
    request(app)
      .post("/api/register")
      .send(userRegister)
      .end((err, res) => {
        res.should.have.status(200);
       done();
      })
  
  });
  
  });
  



// login test


describe("GET /api/login", () => {
    it("It Should login a user", (done) => {
    request(app)
      .post("/api/login") 
      .send(tempLogin)
      .end((err, res) => {
        res.should.have.status(200);
       done();
      })
  
  });
  
  });

 
describe("GET /api/login", () => {
  it("It Should not login a user", (done) => {
  request(app)
    .post("/api/login") 
    .send(userLogin2)
    .end((err, res) => {
      res.should.have.status(400);
     done();
    })

});

});



describe("GET /api/users", () => {
  it("It Should not Fetch all user", (done) => {
    chai
      .request(app)
      .get("/api/users")
      .end((err, res) => {
        res.should.have.status(401);
        done();
      })
      .timeout(10000);
  });
});



describe("GET /api/users", () => {
  let Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwNjExOWI5Njg0OTY4MjRhOWRiMzIwIiwicm9sZSI6ImFkbWluIiwidXNlcm5hbWUiOiJJc3JhZWwifSwiaWF0IjoxNjQ0NzQxNjQ1fQ.1NdkUgQrEAQlu2wbzvflLBXBhDLBRDDTIHFRM3GbfO8"
it("It Should Fetch all user", (done) => {
  request(app)
    .get("/api/users")
    .set({
        'auth-token': Token,
    })  
    .end((err, res) => {
      res.should.have.status(200);
     done();
    })

});

describe("GET /api/admin", () => {
  it("It Should accept admin only", (done) => {
  request(app)
    .post("/api/admin") 
    .send(tempLogin)
    .end((err, res) => {
      res.should.have.status(400);
     done();
    })

});

});

});





  
});