import type {
    ConditionalMongoResponse,
    ResponseDeleteOne,
    ResponseFind,
    ResponseFindOne,
    ResponseInsertOne,
    ResponseUpdateOne,
    TypeAction
} from "../types/mongo";
import type {IncomingMessage} from "node:http";
import type {RequestOptions} from 'node:https'
import type {Response} from "../types/scaleway";
import * as https from 'node:https'

interface User {
    Username: string,
    Password: string,
    Email: string
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

    public static async create(user: User): Promise<Response> {
        try {
            const response: ResponseInsertOne = await this.post("insertOne", {
                "collection": "Users",
                "database": "Motowii",
                "dataSource": "Motowii",
                "document": {
                    "Email": user.Email,
                    "Username": user.Username,
                    "Password": user.Password
                }
            });
            return {
                isBase64Encoded: false,
                statusCode: 200,
                body: response,
            }
        } catch (error) {
            return {
                isBase64Encoded: false,
                statusCode: 500,
                body: JSON.stringify(error),
            }
        }
    }

    public static async readAll(): Promise<Response> {
        try {
            const response: ResponseFind<User> = await this.post<object, User, "find">("find", {
                "collection": "Users",
                "database": "Motowii",
                "dataSource": "Motowii",
                "limit": 15,
            });
            return {
                isBase64Encoded: false,
                statusCode: 200,
                body: response,
            }
        } catch (error) {
            return {
                isBase64Encoded: false,
                statusCode: 500,
                body: JSON.stringify(error),
            }
        }
    }

    public static async readById(id?: string): Promise<Response> {
        try {
            const response: ResponseFindOne<User> = await this.post<object, User, "findOne">("findOne", {
                "collection": "Users",
                "database": "Motowii",
                "dataSource": "Motowii",
                "filter": {
                    "_id": {"$oid": id}
                }
            });
            return {
                isBase64Encoded: false,
                statusCode: 200,
                body: response,
            }
        } catch (error) {
            return {
                isBase64Encoded: false,
                statusCode: 500,
                body: JSON.stringify(error),
            }
        }
    }

    public static async readByUsername(username?: string): Promise<Response> {
        try {
            const response: ResponseFindOne<User> = await this.post<object, User, "findOne">("findOne", {
                "collection": "Users",
                "database": "Motowii",
                "dataSource": "Motowii",
                "filter": {
                    "username": username
                }
            });
            return {
                isBase64Encoded: false,
                statusCode: 200,
                body: response,
            }
        } catch (error) {
            return {
                isBase64Encoded: false,
                statusCode: 500,
                body: JSON.stringify(error),
            }
        }
    }

    public static async updateById(id?: string): Promise<Response> {
        try {
            const response: ResponseUpdateOne = await this.post("updateOne", {
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
            return {
                isBase64Encoded: false,
                statusCode: 200,
                body: response,
            }
        } catch (error) {
            return {
                isBase64Encoded: false,
                statusCode: 500,
                body: JSON.stringify(error),
            }
        }
    }

    public static async deleteById(id?: string): Promise<Response> {
        try {
            const response: ResponseDeleteOne = await this.post("deleteOne", {
                "collection": "Users",
                "database": "Motowii",
                "dataSource": "Motowii",
                "filter": {"_id": {"$oid": id}}
            });
            return {
                isBase64Encoded: false,
                statusCode: 200,
                body: response,
            }
        } catch (error) {
            return {
                isBase64Encoded: false,
                statusCode: 500,
                body: JSON.stringify(error),
            }
        }
    }

    public static async deleteByUsername(username?: string): Promise<Response> {
        try {
            const response: ResponseDeleteOne = await this.post("deleteOne", {
                "collection": "Users",
                "database": "Motowii",
                "dataSource": "Motowii",
                "filter": {"username": username}
            });
            return {
                isBase64Encoded: false,
                statusCode: 200,
                body: response,
            }
        } catch (error) {
            return {
                isBase64Encoded: false,
                statusCode: 500,
                body: JSON.stringify(error),
            }
        }
    }
}
