import type {Event, Context, Response} from "../src/types/scaleway";
import {expect, test} from 'vitest'
import {handle, Payload} from "../index";

test('Read all users in database', async () => {
    const response: Response = await handle({
        body: JSON.stringify({
            TypeEvent: "UPDATE_USER",
        } as Payload)
    } as Event, {} as Context);

    expect((response?.body as object[]).length).toBeGreaterThan(1);
    console.log('Response from Service: ', response)
})