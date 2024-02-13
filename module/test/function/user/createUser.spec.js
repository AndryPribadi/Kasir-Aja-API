import request from "supertest";
import { baseUrl } from "../../../data/config.js";

export async function createUser(token) {
    
    const payload = {
        "name": "kasir-serba-serbi23",
        "email": "serbaisa1256673448@example.com",
        "password": "1234@"
    };

    // Send request to create user with the provided token
    const response = await request(baseUrl)
        .post("/users")
        .set("Authorization", `Bearer ${token}`)
        .send(payload);

    return response;
}
