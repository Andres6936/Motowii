import type {IncomingMessage} from "http";
import type {RequestOptions} from 'https'
import * as https from 'https'

export class ControllerMongo {
    private static readonly KEY = "wXCoG1w9T95RtaLt22o6rKUTi93h4HYFqr2jZJVAVLCghI8QNmRjSiCIxEGsaGmg"
    private static readonly HOSTNAME = 'data.mongodb-api.com'
    private static readonly PATHNAME = "/app/data-nhnyh/endpoint/data/v1/action/findOne"

    private static async post<T, U>(hostname: string, path: string, data: T): Promise<U> {
        return new Promise<U>(async (resolve, reject) => {
            const options: RequestOptions = {
                hostname: hostname,
                path: path,
                method: 'POST',
                headers: {
                    'Access-Control-Request-Headers': '*',
                    'Content-Type': 'application/json',
                    'api-key': this.KEY,
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

    public static async readAll() {
        return await ControllerMongo.post(this.HOSTNAME, this.PATHNAME, {
            "collection": "Users",
            "database": "Motowii",
            "dataSource": "Motowii"
        });
    }
}