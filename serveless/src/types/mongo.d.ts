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

export interface ResponseDeleteOne {
    deletedCount: number,
}

export interface ResponseDeleteMany {
    deletedCount: number,
}

export interface ResponseAggregate<T> {
    documents: T[]
}