// For minify the file for deploy in serveless see:
// https://www.npmjs.com/package/@vercel/ncc

import type {IncomingMessage} from "http";
import type {RequestOptions} from 'https'
import * as https from 'https'

const KEY = "wXCoG1w9T95RtaLt22o6rKUTi93h4HYFqr2jZJVAVLCghI8QNmRjSiCIxEGsaGmg"
const HOSTNAME = 'data.mongodb-api.com'
const PATHNAME = "/app/data-nhnyh/endpoint/data/v1/action/findOne"

export async function handle<T, U, J>(event: T, context: U, cb: J) {
    const response = await post(HOSTNAME, PATHNAME, {
        "collection": "Users",
        "database": "Motowii",
        "dataSource": "Motowii"
    });
    console.log(response, 'Response Handle')

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
            method: 'POST',
            headers: {
                'Access-Control-Request-Headers': '*',
                'Content-Type': 'application/json',
                'api-key': KEY,
            }
        };

        const body: Uint8Array[] = [];

        const req = https.request(options, (res: IncomingMessage) => {
            // console.log('httpsPost statusCode:', res.statusCode);
            // console.log('httpsPost headers:', res.headers);

            res.on('data', d => {
                body.push(d);
            });
            res.on('end', () => {
                resolve(JSON.parse(Buffer.concat(body).toString()));
            });
        });
        req.on('error', e => {
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