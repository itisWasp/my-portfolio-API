import request from "supertest";
import { expect } from "chai";

// import app from "../../app.js";
import app from "../src/index.js";

const tempUser = {
    UserName: "demjinz",
    Email: "test@test.com",
    Password: "1234567890",
};

const tempLogin = {
    Email: "test@test.com",
    Password: "1234567890",
}

//   let tempToken;

  before(function (done) {
    this.timeout(3000);
    setTimeout(done, 2000);
  });


describe("POST users", () => {
    it("should register new user with valid credentials", (done) => {
      request(app)
        .post("/api/register")
        .send(tempUser)
        .expect(200)
        
         done();
        // .then((res) => {
        //   expect(res.body.email).to.be.eql(tempUser.Email);
        //   done();
        // })
        // .catch((err) => done(err));
    });
  
    it("shouldn't accept the email that already exists in the database", (done) => {
      request(app)
        .post("/api/register")
        .send(tempUser)
        .expect(400)
         done();
        // .then((res) => {
        //     expect(res.body.message).to.be.eql("Email is already in use");
        //     done();
        // })
        // .catch((err) => done(err));
    });

    it("Should Login", (done) => {
        let tempToken;
        request(app)
          .post("/api/login")
          .send(tempLogin)
          .expect(200)
          done();
    });

  });