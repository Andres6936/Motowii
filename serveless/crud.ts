// For minify the file for deploy in serveless see:
// https://www.npmjs.com/package/@vercel/ncc

import type {IncomingMessage} from "http";
import type {RequestOptions} from 'https'
import * as https from 'https'

const URL = 'https://data.mongodb-api.com/app/data-nhnyh/endpoint/data/v1/action/findOne'

export async function handle<T, U, J> (event: T, context: U, cb: J) {
    const response = await post('', '', {});
    console.log(response)

    return {
        body: {
            isBase64Encoded: false,
            body: {
                context: context,
                event: event,
                cb: cb,
            },
            statusCode: 200
        },
        statusCode: 200,
    };
}

async function post<T, U>(hostname: string, path: string, data: T): Promise<U> {
    return new Promise<U>(async (resolve, reject) => {
        const options: RequestOptions = {
            hostname: hostname,
            path: path,
            port: 443,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        };

        const body = [];

        const req = https.request(options, (res: IncomingMessage) => {
            // console.log('httpsPost statusCode:', res.statusCode);
            // console.log('httpsPost headers:', res.headers);

            res.on('data', d=> {
                body.push(d);
            });
            res.on('end', () => {
                // console.log(`httpsPost data: ${body}`);
                // resolve(JSON.parse(Buffer.concat(body).toString()));
                resolve("{'name': 'jason'}" as U);
            });
        });
        req.on('error', e => {
            // console.log(`ERROR httpsPost: ${e}`);
            reject(e);
        });
        req.write(JSON.stringify(data));
        req.end();

    });
}

// Handle Execution
(async () => {
    await handle({}, {}, {});
})();