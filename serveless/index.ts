// For minify the file for deploy in serveless see:
// https://www.npmjs.com/package/@vercel/ncc

import type {Event, Context, Response} from "./src/types/scaleway";
import {ControllerMongo} from "./src/controller/ControllerMongo";

export interface Payload {
    TypeEvent: "CREATE_USER" | "READ_USER" | "UPDATE_USER" | "DELETE_USER",
    ScopeEvent: "CREATE" | "READ_ALL" | "READ_BY_ID" | "READ_BY_USERNAME" | "UPDATE_BY_ID" | "DELETE_BY_ID" | "DELETE_BY_USERNAME",
    Id?: string,
    Username?: string,
    Password?: string,
    Email?: string,
}

export async function handle(event: Event, context: Context): Promise<Response> {
    const payload = JSON.parse(event.body) as Payload;

    if (payload?.TypeEvent === "CREATE_USER") {
        return await handleCreate(payload);

    } else if (payload?.TypeEvent === "READ_USER") {
        return await handleRead(payload);

    } else if (payload?.TypeEvent === "DELETE_USER") {
        return await handleDelete(payload);

    } else if (payload?.TypeEvent === "UPDATE_USER") {
        return await handleUpdate(payload);

    } else {
        return {
            isBase64Encoded: false,
            body: {
                context: context,
                event: event,
            },
            statusCode: 200
        }
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

async function handleCreate(payload: Payload): Promise<Response> {
    if (payload?.ScopeEvent === "CREATE") {
        return await ControllerMongo.create({
            Username: payload.Username ?? "",
            Password: payload.Password ?? "",
            Email: payload.Email ?? "",
        });
    } else {
        return {
            isBase64Encoded: false,
            statusCode: 404,
            body: "Not Scope Event"
        }
    }
}

async function handleRead(payload: Partial<Payload>): Promise<Response> {
    if (payload?.ScopeEvent === "READ_ALL") {
        return await ControllerMongo.readAll();

    } else if (payload?.ScopeEvent === "READ_BY_ID") {
        return await ControllerMongo.readById(payload.Id);

    } else if (payload?.ScopeEvent === "READ_BY_USERNAME") {
        return await ControllerMongo.readByUsername(payload.Username);

    } else {
        return {
            isBase64Encoded: false,
            statusCode: 404,
            body: "Not Scope Event"
        }
    }
}

async function handleDelete(payload: Partial<Payload>): Promise<Response> {
    if (payload?.ScopeEvent === "DELETE_BY_ID") {
        return await ControllerMongo.deleteById(payload.Id);

    } else if (payload?.ScopeEvent === "DELETE_BY_USERNAME") {
        return await ControllerMongo.deleteByUsername(payload.Username);

    } else {
        return {
            isBase64Encoded: false,
            statusCode: 404,
            body: "Not Scope Event"
        }
    }
}

async function handleUpdate(payload: Payload): Promise<Response> {
    if (payload?.ScopeEvent === "UPDATE_BY_ID") {
        return await ControllerMongo.updateById(payload.Id);
        
    } else {
        return {
            isBase64Encoded: false,
            statusCode: 404,
            body: "Not Scope Event"
        }
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