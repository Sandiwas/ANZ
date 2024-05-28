import supertest from "supertest";
import { expect } from "chai";
const request = supertest("https://dummy.restapiexample.com/api/v1/");

describe("employees", () => {
  it("GET /employees", () => {
    return request.get(`employees`).then((res) => {
      console.log(res.statusCode);
      console.log(res.body);
    });
  });
});
