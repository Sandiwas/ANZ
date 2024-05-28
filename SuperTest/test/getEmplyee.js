import supertest from "supertest";
import { expect } from "chai";
const request = supertest("https://dummy.restapiexample.com/api/v1/");

describe("employee", () => {
  it("GET /employee", () => {
    return request.get(`employee/1`).then((res) => {
      console.log(res.statusCode);
      console.log(res.body);
    });
  });
});
