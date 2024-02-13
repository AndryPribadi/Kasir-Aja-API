import request from "supertest";
import { expect } from "chai";
import { baseUrl } from "../../../data/config.js";
import { createToken } from "../../function/auth/createToken.spec.js";

describe("Delete Category Scenario", () =>{
    let token;

    before(async () => {
        // Import token before running tests
        token = await createToken();
        console.log(token);
    });

    it("Positive - Success Delete Category", async () =>{
        //send request
        const response = await request (baseUrl)
            .delete("/categories/7197b057-b064-499a-a4bf-d2156157d897") //endpoint
            .set("Authorization", `Bearer ${token}`)

        expect((await response).status).to.equal(200)
        expect((await response).body.status).to.have.equal("success")
        console.log((await response).body)
    })
})