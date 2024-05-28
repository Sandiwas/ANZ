import supertest from "supertest";
import { expect } from "chai";
const request = supertest("https://dummy.restapiexample.com/api/v1/");

describe("employee", () => {
  it("POST /employee", () => {
    const data = {
      employee_name: "Sachin sang",
      employee_salary: 320800,
      employee_age: 31,
    };

    return request
      .post(`create`)
      .send(data)
      .then((res) => {
        console.log(res.statusCode);
        console.log(res.body);
        expect(res.body.data.employee_name).to.equals("Sachin sang");
        expect(res.body.data.statusCode).to.equals(data.statusCode);
        expect(res.body.data).to.deep.include(data);
      });
  });
});
