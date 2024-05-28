import supertest from "supertest";
import { expect } from "chai";
const request = supertest("https://parabank.parasoft.com/parabank/");

describe("employee register", () => {
  it("GET /employee", () => {
    return request.get(`register.htm`).then((res) => {
      console.log(res.statusCode);
      console.log(res.body.data);
    });
  });
});
it("POST /users/register", () => {
  const firstName = customer.firstName;
  const lastName = customer.lastName;
  const street = customer.address.street;
  const city = customer.address.city;
  const state = customer.address.statee;
  const zipCode = customer.address.zipCode;
  const phoneNumber = customer.phoneNumber;
  const ssn = customer.ssn;
  const username = customer.username;
  const password = customer.password;

  const data = {
    firstName: "rama211",
    lastName: "rajaa1",
    street: "wadgavsheri",
    city: "pune",
    state: "maharastra",
    zipCode: 411014,
    phoneNumber: 8677657434,
    ssn: 12,
    username: "rama211",
    password: "rama2@443",
    repeatedPassword: "rama2@443",
  };
  return request
    .post(`register.htm`)
    .send(data)
    .then((res) => {
      console.log(res.statusCode);
      console.log(res.body);
    });
});
