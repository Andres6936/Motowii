import type {Event, Context, Response} from "../src/types/scaleway";
import {expect, describe, it, beforeAll} from 'vitest'
import {handle, Payload} from "../index";
import * as dotenv from 'dotenv';

beforeAll(() => {
    dotenv.config();
})

describe('should be create, read, update and delete user', function() {
    it('should create the user', async function() {
        const response: Response = await handle({
            body: JSON.stringify({
                TypeEvent: "CREATE_USER",
                ScopeEvent: "CREATE",
                Username: "Adan",
                Password: "Adan123",
                Email: "adan@maildrop.cc"
            } as Payload)
        } as Event, {} as Context);

        expect(response.statusCode).toEqual(200);
    });
}, 30_000);
