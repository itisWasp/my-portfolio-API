import path from "path";
import "dotenv/config";
import jwt from "jsonwebtoken";
import chai, { expect, should } from "chai";
import chaiHttp from "chai-http";
import request from "supertest"
import mocha from "mocha";
import Post from "../src/models/BlogModel";
import server from "../src/index";
import mockdata from "./mockdata";
import app from "../src/index";

chai.should();

chai.use(chaiHttp);

const testPost = {
  Title : "Meet founder and owner of facebook",
  Body : "lasygkyugakuysgdkuygaksdyugkayugkdauygakyugkauygakyugauygadyguydgayud",
  ImageLink : "https://youtu.be/f3wOS11SP9I"
};

const testPostfor_update = {
  Title : "New Post title",
  Body : "lasygkyugakuysgdkuygaksdyugkayugkdauygakyugkauygakyugauygadyguydgayud",
  ImageLink : "https://youtu.be/f3wOS11SP9I"
};

const message = {
  Comment: "I like the post"
}

describe("BLOG CRUD OPERATIONS ", () => {
  //get all posts

  describe("GET /api/Getblog", () => {
    it("It Should Fetch all Posts", (done) => {
      chai
        .request(app)
        .get("/api/Getblog")
        .end((err, res) => {
          res.should.have.status(200);
          done();
        })
        .timeout(10000);
    });
  });

  //fetch a single post

  describe("GET /api/Getblog/id", () => {
    it("It Should Fetch a Post by ID", (done) => {
      const id = "6206219e34a53804227f944c";
      chai
        .request(app)
        .get("/api/Getblog/" + id)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        })
        .timeout(10000);
    });
  });

  // post route



  describe("POST /api/Postblog", () => {
    let Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwNjExOWI5Njg0OTY4MjRhOWRiMzIwIiwicm9sZSI6ImFkbWluIiwidXNlcm5hbWUiOiJJc3JhZWwifSwiaWF0IjoxNjQ0NzQxNjQ1fQ.1NdkUgQrEAQlu2wbzvflLBXBhDLBRDDTIHFRM3GbfO8"
  it("should post new article", (done) => {
    request(app)
      .post("/api/Postblog")
      .set({
          'auth-token': Token,
      })  
      .send(testPost)
      .end((err, res) => {
        res.should.have.status(200);
       done();
      })

  });

});
// create new article

describe("GET /api/articles/create", () => {
  let Token = "eyJhbGciOiJzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjdmOGIzMGY2NTlmMTQ4YTI0NTM4NCIsImlhdCI6MTY0NDE3NDExN30.HQg8meIfa_q3B-WfvYgMEcq-sjsU3pfWEV8P9jwPpn0"
it("should be blocked from posting", (done) => {
  request(app)
    .post("/api/Postblog")
    .set({
        'authantication': Token,
    })  
    .send(testPost)
    .end((err, res) => {
      res.should.have.status(401);
     done();
    })

});

});

describe("PUT /api/comment", () => {
  let Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwNjExOWI5Njg0OTY4MjRhOWRiMzIwIiwicm9sZSI6ImFkbWluIiwidXNlcm5hbWUiOiJJc3JhZWwifSwiaWF0IjoxNjQ0NzQxNjQ1fQ.1NdkUgQrEAQlu2wbzvflLBXBhDLBRDDTIHFRM3GbfO8"
it("should comment article", (done) => {
  const id = "6206219e34a53804227f944c";
  request(app)
    .put("/api/comment/"+ id)
    .set({
        'auth-token': Token,
    })  
    .send(message)
    .end((err, res) => {
      res.should.have.status(200);
     done();
    })

});

});



})