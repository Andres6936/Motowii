import type {Event, Context, Response} from "../scaleway";
import {expect, test} from 'vitest'
import {handle, Payload} from "../index";

test('Read all users in database', async () => {
    const response: Response = await handle({
        body: JSON.stringify({
            TypeEvent: "DELETE_USER",
        } as Payload)
    } as Event, {} as Context);

    expect((response?.body as object[]).length).toBeGreaterThanOrEqual(1);
    console.log('Response from Service: ', response)
})