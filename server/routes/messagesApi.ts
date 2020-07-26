import { Request, Response } from "express";

import * as messages from "../db/messages";

export const get = (req: Request, res: Response) => {
    messages.getAll().then((msgs) => {
        res.json(msgs);
    });
};

export const post = (req: Request, res: Response) => {
    console.log(req.body);
    messages
        .add(req.body)
        .then((msg) => {
            res.json(msg);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};
