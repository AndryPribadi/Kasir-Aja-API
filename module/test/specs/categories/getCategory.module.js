import request from "supertest";
import { expect } from "chai";
import { baseUrl } from "../../../data/config.js";
import { createToken } from "../../function/auth/createToken.spec.js";

describe("get Category Scenario", () =>{
    let token;

    before(async () => {
        // Import token before running tests
        token = await createToken();
        console.log(token);
    });

    it("Positive - Success get Category", async () =>{
        //send request
        const response = await request (baseUrl)
        .get("/categories") //endpoint
        .set("Authorization", `Bearer ${token}`)

        expect((await response).status).to.equal(200)
        expect((await response).body.status).to.have.equal("success")
    })
    
})