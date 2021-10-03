import {Request, Response} from "express";
import BaseController from "../BaseController";

export class HomeController extends BaseController {

    constructor() {
        super();
    }

    index(req: Request, res: Response) {
        res.json({
            status: "Success",
            message: "Default home page"
        })
    }
}