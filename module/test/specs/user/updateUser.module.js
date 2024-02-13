import { expect } from "chai";
import { createToken } from "../../function/auth/createToken.spec.js";
import { updateUser } from "../../function/user/updateUser.specs.js";

describe("Success - update user", () =>{
    
    it("import token", async () => {
        const token = await createToken()
        console.log(await token);
    })

    it("success update user by function", async () =>{
        const response = await updateUser();
        console.log((await response).status)
        //Assertion pake chai
        expect((await response).status).to.equal(200)
        expect((await response).body.status).to.have.equal("success")
        console.log((await response).body)
    })

    
})