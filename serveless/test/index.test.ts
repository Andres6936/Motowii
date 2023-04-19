import type {Event, Context, Response} from "../src/types/scaleway";
import {expect, describe, it} from 'vitest'
import {handle, Payload} from "../index";


describe('should be create, read, update and delete user', function () {
    it('should create the user', async function () {
        let response: Response = await handle({
            body: JSON.stringify({
                TypeEvent: "CREATE_USER",
                ScopeEvent: "CREATE",
                Username: "Adan",
                Password: "Adan123",
                Email: "adan@maildrop.cc"
            } as Payload)
        } as Event, {} as Context);

        expect(response).toHaveProperty("isBase64Encoded", false);
        expect(response).toHaveProperty("statusCode", 200);
        expect(response).toHaveProperty("body.insertedId");

        response = await handle({
            body: JSON.stringify({
                TypeEvent: "READ_USER",
                ScopeEvent: "READ_BY_USERNAME",
                Username: "Adan",
            } as Payload)
        } as Event, {} as Context);

        expect(response).toHaveProperty("isBase64Encoded", false);
        expect(response).toHaveProperty("statusCode", 200);
        expect(response).toHaveProperty("body.document");
    });
});
