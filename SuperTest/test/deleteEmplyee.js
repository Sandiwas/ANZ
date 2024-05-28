import supertest from "supertest";
import { expect } from "chai";
const request = supertest("https://dummy.restapiexample.com/public/api/v1/");

describe("employee", () => {
  it("DELETE /employee", () => {
    return request.delete(`delete/3`).then((res) => {
      console.log(res.statusCode);
      console.log(res.body.data);
    });
  });
});
