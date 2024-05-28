import supertest from "supertest";
import { expect } from "chai";
const request = supertest("https://parabank.parasoft.com/parabank/");

describe.only("login", () => {
  it("GET /logoff", () => {
    return request.get(`logout.htm`).then((res) => {
      console.log(res.statusCode);
      console.log(res.body);
    });
  });

  it("POST /login", () => {
    const data = {
      username: "rama1",
      password: "rama@41",
    };
    return request
      .post(`login.htm`)
      .send(data)
      .then((res) => {
        console.log(res.statusCode);
        console.log(res.body);
        expect(res.body.data.statusCode).to.equals(data.statusCode);
        expect(res.body.data).to.deep.include(data);
      });
  });
});
