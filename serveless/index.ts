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
        return wrapperResponse({
            isBase64Encoded: false,
            statusCode: 200,
            body: 'Not Implemented',
        })
    } else if (payload?.TypeEvent === "READ_USER") {
        const response = await handleRead(payload);
        return wrapperResponse({
            isBase64Encoded: false,
            statusCode: 200,
            body: response?.documents,
        })
    } else if (payload?.TypeEvent === "DELETE_USER") {
        return wrapperResponse({
            isBase64Encoded: false,
            statusCode: 200,
            body: 'Not Implemented',
        })
    } else if (payload?.TypeEvent === "UPDATE_USER") {
        return wrapperResponse({
            isBase64Encoded: false,
            statusCode: 200,
            body: 'Not Implemented',
        })
    } else {
        return wrapperResponse({
            isBase64Encoded: false,
            body: {
                context: context,
                event: event,
            },
            statusCode: 200
        })
    }
}

function wrapperResponse(payload: Response): Response {
    return {
        isBase64Encoded: payload.isBase64Encoded,
        statusCode: payload.statusCode,
        headers: payload.headers ?? {},
        body: payload.body,
    }
}

async function handleRead(payload: Partial<Payload>) {
    if (payload?.ScopeEvent === "READ_ALL") {
        return await ControllerMongo.readAll();
    }
}


// Handle Execution
(async () => {
    const response = await handle({
        body: JSON.stringify({
            TypeEvent: "READ_USER",
            ScopeEvent: "READ_ALL"
        } as Payload)
    } as Event, {} as Context);

    console.log('Response from Service: ', response)
})();