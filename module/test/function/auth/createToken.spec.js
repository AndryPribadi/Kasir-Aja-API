import request from "supertest";
import {baseUrl} from "../../../data/config.js";

export async function createToken(){
    const login = {
        "email": "captikus@ex.com",
        "password": "123456",
    }
    //send request
    const response = await request (baseUrl)
        .post("/authentications") //endponit
        .send(login) //request body
        //.set("Content-Type","application/json") //header

    const token = (await response).body.data.accessToken
    return token
}