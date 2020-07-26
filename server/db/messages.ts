import Joi from "joi";

import db from "./connection";

const messages = db.get("messages");

interface Message {
    username: string;
    subject: string;
    message: string;
    imageURL?: string;
    createdAt?: Date;
}

const schema = Joi.object().keys({
    username: Joi.string().alphanum().required(),
    subject: Joi.string().required(),
    message: Joi.string().max(500).required(),
    imageURL: Joi.string().uri({ scheme: [/http/, /https/] }),
});

export function getAll(): Promise<Message[]> {
    return messages.find();
}

export function add(message: Message): Promise<any> {
    const result = schema.validate(message);
    if (!result.error) {
        message.createdAt = new Date();
        return messages.insert(message);
    } else {
        return Promise.reject(result.error);
    }
}
