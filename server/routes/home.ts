import { Request, Response } from "express";

export const get = (req: Request, res: Response) => {
    res.send("Hello World!");
};
