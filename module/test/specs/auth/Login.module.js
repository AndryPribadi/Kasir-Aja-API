import request from "supertest";
import { expect } from "chai";
import { baseUrl } from "../../../data/config.js";

describe("Login Token Toko Scenario", () =>{
    let token;
    it("Positive - Success Login Token", async () =>{
        const payload = {
            "email": "captikus@ex.com",
            "password": "123456",
        }
        const response = await request (baseUrl)
            .post("/authentications")
            .send(payload)

        expect((await response).status).to.equal(201)
        token = (await response).body.data.accessToken
        console.log(await token);
    })
})

