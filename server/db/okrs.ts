import Joi from "joi";

import db from "./connection";

const okrs = db.get("okrs");

interface UserId {}
interface User {
    username: string;
    _id?: UserId;
}

interface ExternalResourceId {}
interface ExternalResource {
    type: string;
    url: string;
    _id?: ExternalResourceId;
}

interface ReportPieceId {}
interface ReportPiece {
    text: string;
    createdBy: UserId; // not sure if needed
    createdAt?: Date; // filed in at the moment of db insertion
    validFor?: Date; // may be different from created at
    relatedResources: ExternalResource[];
    _id?: ReportPieceId;
}

interface UserCommentId {}
interface UserComment {
    text: string;
    createdBy: UserId; // not sure if needed
    createdAt?: Date; // filed in at the moment of db insertion
    validFor?: Date; // may be different from created at
    relatedResources: ExternalResource[];
    _id?: UserCommentId;
}

//interface OKRId {}
//interface OKR {
//    isKeyResult: boolean;
//    what: string;
//    progress: string;
//    target?: Date;
//    ownedBy: UserId;
//    createdBy: UserId;
//    createdAt?: Date; // filed in at the moment of db insertion
//    children: OKRId[];
//    parent?: OKRId;
//    helps: OKRId[];
//    isHelpedBy: OKRId[];
//    comments: UserComment[];
//    reportings: ReportPiece[];
//    relatedResources: ExternalResource[];
//    _id: OKRId;
//}

interface OKRId {}
interface OKR {
    what: string;
    createdBy: string;
    createdAt?: Date; // filed in at the moment of db insertion
    children: OKRId[];
    parent?: OKRId;
    helps: OKRId[];
    isHelpedBy: OKRId[];
    _id: OKRId;
}

const schema = Joi.object().keys({
    createdBy: Joi.string().alphanum().required(),
    what: Joi.string().required(),
    children: Joi.array().items(Joi.string()),
    parent: Joi.string(),
    helps: Joi.array().items(Joi.string()),
    isHelpedBy: Joi.array().items(Joi.string()),
});

export function getAll(): Promise<OKR[]> {
    return okrs.find();
}

export function add(okr: OKR): Promise<any> {
    const result = schema.validate(okr);
    if (!result.error) {
        okr.createdAt = new Date();
        return okrs.insert(okr);
    } else {
        return Promise.reject(result.error);
    }
}
