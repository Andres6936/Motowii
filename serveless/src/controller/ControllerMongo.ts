import type {ConditionalMongoResponse, TypeAction} from "../types/mongo";
import type {IncomingMessage} from "node:http";
import type {RequestOptions} from 'node:https'
import * as https from 'node:https'

interface User {
    username: string,
    password: string,
    email: string
}

export class ControllerMongo {
    private static readonly KEY = process.env.MONGO_DATA_API_KEY
    private static readonly HOSTNAME = 'data.mongodb-api.com'
    private static readonly PATHNAME = "/app/data-nhnyh/endpoint/data/v1/action/"

    private static async post<Type, Response, Action extends TypeAction>(action: Action, data: Type)
        : Promise<ConditionalMongoResponse<Action, Response>> {
        return new Promise<ConditionalMongoResponse<Action, Response>>(async (resolve, reject) => {
            const options: RequestOptions = {
                hostname: this.HOSTNAME,
                path: this.PATHNAME + action,
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

    public static async create(user: User) {
        return await this.post("insertOne", {
            "collection": "Users",
            "database": "Motowii",
            "dataSource": "Motowii",
            "document": {
                "email": user.email,
                "username": user.username,
                "password": user.password
            }
        });
    }

    public static async readAll() {
        return await this.post("find", {
            "collection": "Users",
            "database": "Motowii",
            "dataSource": "Motowii",
            "limit": 15,
        });
    }

    public static async readById(id?: string) {
        return await this.post("findOne", {
            "collection": "Users",
            "database": "Motowii",
            "dataSource": "Motowii",
            "filter": {
                "_id": {"$oid": id}
            }
        });
    }

    public static async readByUsername(username?: string) {
        return await this.post("findOne", {
            "collection": "Users",
            "database": "Motowii",
            "dataSource": "Motowii",
            "filter": {
                "username": username
            }
        });
    }

    public static async updateById(id?: string) {
        return await this.post("updateOne", {
            "collection": "Users",
            "database": "Motowii",
            "dataSource": "Motowii",
            "filter": {"_id": {"$oid": id}},
            "update": {
                "$set": {
                    "status": "complete",
                    "completedAt": {"$date": {"$numberLong": "1637083942954"}}
                }
            }
        });
    }

    public static async deleteById(id?: string) {
        return await this.post("deleteOne", {
            "collection": "Users",
            "database": "Motowii",
            "dataSource": "Motowii",
            "filter": {"_id": {"$oid": id}}
        });
    }

    public static async deleteByUsername(username?: string) {
        return await this.post("deleteOne", {
            "collection": "Users",
            "database": "Motowii",
            "dataSource": "Motowii",
            "filter": {"username": username}
        });
    }
}
