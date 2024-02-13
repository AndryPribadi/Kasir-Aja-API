import request from "supertest";
import { expect } from "chai";

const baseUrl = "https://kasir-api.belajarqa.com";

describe("Registration Toko Scenario", () =>{
    it("Positive - Success Registration", async () =>{
        const payload = {
            "name": "nama Toko tikus",
            "email": "captikus@ex.com",
            "password": "123456",
        }
        const response = await request (baseUrl)
            .post("/registration")
            .send(payload)

        expect((await response).status).to.equal(201)
        console.log((await response).body);
    })
})

