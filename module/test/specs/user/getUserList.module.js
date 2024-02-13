import { expect } from "chai";
import { getUser } from "../../function/user/getUser.spec.js";


describe("Success - get user list ", () =>{
    
    it("success get user list by function", async () =>{
        const response = await getUser.list();
        console.log((await response).status)
        //Assertion pake chai
        expect((await response).status).to.equal(200)
        expect((await response).body.status).to.have.equal("success")
        console.log((await response).body)
    })
})
