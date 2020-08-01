import { Request, Response } from "express";

import * as okrs from "../db/okrs";

export const get = (req: Request, res: Response) => {
    okrs.getAll().then((okrs) => {
        res.json(okrs);
    });
};

export const post = (req: Request, res: Response) => {
    console.log(req.body);
    okrs.add(req.body)
        .then((okr) => {
            res.json(okr);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};
