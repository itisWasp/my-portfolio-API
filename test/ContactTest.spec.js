import chai from "chai";
import chaiHttp from "chai-http";
import server from "../src/index.js";
import request from "supertest";

//Assertion style
chai.should();

chai.use(chaiHttp);

//post route

  describe("POST /api/contact", () => {
    it("It Should POST Contact", (done) => {
      const form = {
        FullName: "yolla gee",
        Email: "test@test.com",
        Messages:
          "Hello, world"
      };
      chai
        .request(server)
        .post("/api/PostContact")
        .send(form)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("fullname");
          res.body.should.have.property("email");
          res.body.should.have.property("messages");
          done();
        })
        .timeout(10000);
    });
  });

//get list of contact form.

describe("GET /api/contact", () => {
  it("It Should GET all Contact Form Queries", (done) => {
    let tempToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwNjExOWI5Njg0OTY4MjRhOWRiMzIwIiwicm9sZSI6ImFkbWluIiwidXNlcm5hbWUiOiJJc3JhZWwifSwiaWF0IjoxNjQ0NzQxNjQ1fQ.1NdkUgQrEAQlu2wbzvflLBXBhDLBRDDTIHFRM3GbfO8"
    chai
      .request(server)
      .get("/api/contact")
      .set({
        'auth-token': tempToken,
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        done();
      })
      .timeout(10000);
  });
});

//get contact form by id.

describe("GET /api/contact/:id", () => {
  it("It Should GET a Contact Form by ID", (done) => {
    let tempToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwNjExOWI5Njg0OTY4MjRhOWRiMzIwIiwicm9sZSI6ImFkbWluIiwidXNlcm5hbWUiOiJJc3JhZWwifSwiaWF0IjoxNjQ0NzQxNjQ1fQ.1NdkUgQrEAQlu2wbzvflLBXBhDLBRDDTIHFRM3GbfO8"
    const _id = "61f0fceb69b2259949e3ab88";
    chai
      .request(server)
      .get("/api/contact/" + _id)
      .set({
        'auth-token': tempToken,
      })  
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("_id");
        res.body.should.be.a("object");
        res.body.should.have.property("email");
        res.body.should.have.property("messages");
        res.body.should.have.property("_id").equals(_id);
        done();
      })
      .timeout(10000);
  });
});

//delete a contact form query.

describe("DELETE /api/contact/:id", () => {
  let tempToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwNjExOWI5Njg0OTY4MjRhOWRiMzIwIiwicm9sZSI6ImFkbWluIiwidXNlcm5hbWUiOiJJc3JhZWwifSwiaWF0IjoxNjQ0NzQxNjQ1fQ.1NdkUgQrEAQlu2wbzvflLBXBhDLBRDDTIHFRM3GbfO8"
  it("It Should DELETE a Contact Query by ID", (done) => {
    const _id = "61f0fceb69b2259949e3ab88";
    request(server)
      .delete("/api/contact/" + _id)
      .set({
        'auth-token': tempToken,
      })
      .expect(200)

        done();
        
      })
      .timeout(10000);
  
});