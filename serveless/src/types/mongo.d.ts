export type TypeAction =
    "findOne"
    | "find"
    | "insertOne"
    | "insertMany"
    | "updateOne"
    | "updateMany"
    | "replaceOne"
    | "deleteOne"
    | "deleteMany"
    | "aggregate"

export interface ResponseFindOne<T> {
    document: T,
}

export interface ResponseFind<T> {
    documents: T[],
}

export interface ResponseInsertOne {
    insertedId: string,
}

export interface ResponseInsertMany {
    insertedIds: string[],
}

export interface ResponseUpdateOne {
    matchedCount: number,
    modifiedCount: number,
}

export interface ResponseUpdateMany {
    matchedCount: number,
    modifiedCount: number,
}

export interface ResponseReplaceOne {
    matchedCount: number,
    modifiedCount: number,
}

export interface ResponseDeleteOne {
    deletedCount: number,
}

export interface ResponseDeleteMany {
    deletedCount: number,
}

export interface ResponseAggregate<T> {
    documents: T[]
}

export type ReturnTypeMongoResponse<Action extends TypeAction, T> =
    Action extends "findOne" ? ResponseFindOne<T> :
    Action extends "find" ? ResponseFind<T> :
    Action extends "insertOne" ? ResponseInsertOne :
    Action extends "insertMany" ? ResponseInsertMany :
    Action extends "updateOne" ? ResponseUpdateOne :
    Action extends "updateMany" ? ResponseUpdateMany :
    Action extends "replaceOne" ? ResponseReplaceOne :
    Action extends "deleteOne" ? ResponseDeleteOne :
    Action extends "deleteMany" ? ResponseDeleteMany :
    Action extends "aggregate" ? ResponseAggregate<T> : never