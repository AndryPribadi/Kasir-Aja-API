import { expect } from "chai";
import { createUser } from "../function/user/createUser.spec.js";
import { getUser } from "../function/user/getUser.spec.js";
import { updateUser } from "../function/user/updateUser.specs.js";
import { deleteUser } from "../function/user/deleteUser.specs.js";
import { createToken } from "../function/auth/createToken.spec.js";

describe("End to End - User", () =>{
    let token;
    it("Success Create User", async () => {
        token = await createToken()
        const response = await createUser(token)

        expect((await response).status).to.equal(201)
        expect((await response).body.status).to.have.equal("success")
    })

    it("Success get User", async () => {
        token = await createToken()
        const response = await getUser.list(token)

        expect((await response).status).to.equal(200)
        expect((await response).body.status).to.have.equal("success")
    })

    it("Success update User", async () => {
        token = await createToken()
        const response = await updateUser(token)

        expect((await response).status).to.equal(200)
        expect((await response).body.status).to.have.equal("success")
    })

    it("Success delete User", async () => {
        token = await createToken()
        const response = await deleteUser(token)

        expect((await response).status).to.equal(200)
        expect((await response).body.status).to.have.equal("success")
    })
})