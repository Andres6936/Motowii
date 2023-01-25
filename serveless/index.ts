// For minify the file for deploy in serveless see:
// https://www.npmjs.com/package/@vercel/ncc

import type {Event, Context, Response} from "./scaleway";
import {ControllerMongo} from "./ControllerMongo";

interface Payload {
    TypeEvent: "CREATE_USER" | "READ_USER" | "UPDATE_USER" | "DELETE_USER",
    ScopeEvent: "CREATE" | "READ_ALL" | "READ_BY_ID" | "UPDATE_BY_ID" | "DELETE_BY_ID"
}

export async function handle(event: Event, context: Context): Promise<Response> {
    const payload = JSON.parse(event.body) as Partial<Payload>;

    if (payload?.TypeEvent === "CREATE_USER") {

    } else if (payload?.TypeEvent === "READ_USER") {
        await handleRead(payload);
    } else if (payload?.TypeEvent === "DELETE_USER") {

    } else if (payload?.TypeEvent === "UPDATE_USER") {

    }

    return {
        body: {
            isBase64Encoded: false,
            body: {
                context: context,
                event: event,
            },
            statusCode: 200
        },
        statusCode: 200,
    };
}

async function handleRead(payload: Partial<Payload>) {
    if (payload?.ScopeEvent === "READ_ALL") {
        const response = await ControllerMongo.readAll();
        console.log(response, 'Response Handle')
    }
}


// Handle Execution
(async () => {
    await handle({
        body: JSON.stringify({
            TypeEvent: "READ_USER",
            ScopeEvent: "READ_ALL"
        } as Payload)
    } as Event, {} as Context);
})();