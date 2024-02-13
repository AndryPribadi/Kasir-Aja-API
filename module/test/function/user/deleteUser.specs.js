import request from "supertest";
import { baseUrl } from "../../../data/config.js";

export async function deleteUser(token){
    //send request
    const response = await request (baseUrl)
        .delete("/users/{8fe94ec0-d834-4307-bd74-3e8063d1f321}") //endponit
        .set("Authorization", `Bearer ${token}`)

        return (await response)

}