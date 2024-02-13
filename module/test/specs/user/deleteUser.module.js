import { expect } from "chai";
import { createToken } from "../../function/auth/createToken.spec.js";
import { deleteUser } from "../../function/user/deleteUser.specs.js";

describe("Success - delete user", () =>{
    
    it("import token", async () => {
        const token = await createToken()
        console.log(await token);
    })

    it("success delete user by function", async () =>{
        const response = await deleteUser();
        console.log((await response).status)
        //Assertion pake chai
        expect((await response).status).to.equal(0)
        expect((await response).body.status).to.have.equal("success")
        console.log((await response).body)
    })

    
})