import request from "supertest";
import { baseUrl } from "../../../data/config.js";
import { createToken } from "../../function/auth/createToken.spec.js";

async function getUserList(token) {

    let response = await request(baseUrl)
        .get("/users")
        .set("Authorization", `Bearer ${token}`)

        return (await response)
}

async function getUserParams(paramName) {
    let response = await request(baseUrl)
        .get(`/users`+`?q=${paramName}`)

        return (await response)
}

async function getUserDetail(userId) {
    let token;

    before(async () => {
        // Import token before running tests
        token = await createToken();
        console.log(token);
    });

    let response = await request(baseUrl)
        .get("/users/1262bfc5-ece4-475f-9486-64a3d7eb16e6")

        return (await response)
}

export const getUser = {
    list : getUserList,
    params : getUserParams,
    detail : getUserDetail
}