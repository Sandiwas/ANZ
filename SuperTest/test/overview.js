import supertest from "supertest";
import { expect } from "chai";
const request = supertest("https://parabank.parasoft.com/parabank/");

describe("logoff", () => {
  it("GET /logoff", () => {
    return request.get(`logout.htm`).then((res) => {
      console.log(res.statusCode);
      console.log(res.body);
    });
  });
});
it("GET /overview", () => {
  return request.get(`overview.htm`).then((res) => {
    console.log(res.statusCode);
    console.log(res.body);
  });
});
