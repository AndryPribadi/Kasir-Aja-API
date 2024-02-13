import { expect } from "chai";
import { createUser } from "../../function/user/createUser.spec.js";

describe("Success - Create user", () =>{
    
    it("success create user by function", async () =>{
        const response = await createUser();
        console.log((await response).status)
        //Assertion pake chai
        expect((await response).status).to.equal(200)
        console.log((await response).body)
    })

    
})