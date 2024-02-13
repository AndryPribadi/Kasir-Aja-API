import request from "supertest";
import { baseUrl } from "../../../data/config.js";

export async function updateUser(token){
    const payload = {
        "name": "kasir-serbabisa",
        "email": "serbaisa@example.com"
    }
    //send request
    const response = await request (baseUrl)
        .put("/users/{8fe94ec0-d834-4307-bd74-3e8063d1f321}") //endponit
        .send(payload) //request body
        .set("Authorization", `Bearer ${token}`)

        return (await response)

}