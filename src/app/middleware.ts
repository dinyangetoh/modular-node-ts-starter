// import multer from 'multer';

// import { env } from './environment/env';
import {NextFunction, Request, Response} from 'express'
import bodyParser = require('body-parser');

const cors = require('cors');


export const appMiddlewares = [
    bodyParser.json(),
    bodyParser.urlencoded({extended: true}),
    cors(),
    
    function (req: Request, res: Response, next: NextFunction) {
        res.set('Cache-Control', 'no-store, max-age=0')
        next()
    },
    function (req: Request, res: Response, next: NextFunction) {
        res.header("Access-Control-Allow-Origin");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    },
]