import request from "supertest";
import { expect } from "chai";
import { baseUrl } from "../../../data/config.js";
import { createToken } from "../../function/auth/createToken.spec.js";

describe("Create Category Scenario", () => {
    let token;

    before(async () => {
        // Import token before running tests
        token = await createToken();
        console.log(token);
    });

    it("Positive - Success Create Category", async () => {
        const payload = {
            "name": "makanan berat 1 aja",
            "description": "makanan ringan dari wingfood"
        };

        // Send request with token in the header
        const response = await request(baseUrl)
            .post("/categories")
            .set("Authorization", `Bearer ${token}`)
            .send(payload);

        // Assertion
        expect(response.status).to.equal(201);
        expect((await response).body.status).to.have.equal("success")
        console.log(response.body);
    });
});
