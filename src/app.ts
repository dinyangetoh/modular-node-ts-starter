import express, {Application} from "express";
import routes from "./app/routes";
import {appMiddlewares} from "./app/middleware";
import {connect} from 'mongoose'

export class App {
    public app: Application

    constructor(
        private port: number,
        middleware: Array<any> = appMiddlewares,
        private apiPath: string = '/api',
    ) {
        this.app = express();
        this.routes();
        this.middleware(middleware);
    }

    private middleware(middlewares: any[]) {
        middlewares.forEach(middleware => {
            this.app.use(middleware)
        })
    }

    private routes() {
        this.defaultRoute();
        const routesData = routes;
        routesData.forEach(route => {
            this.app.use(`${this.apiPath}`, route)
        })
    }

    private defaultRoute() {
        this.app.get('/', (req, res) => res.send({
            status: "success",
            message: "Default route, Nothing happens here"
        }));

    }

    public async connectDB(dbUri: string) {

        try {
            // Database configuration
            await connect(dbUri);
            console.log('Database connected successfully');
        } catch (err) {
            console.log('Error connecting Mongodb');
            console.log(err.message);
        }

    }


    public listen() {
        this.app.listen(this.port, () => {
            console.log("APP LISTENING ON PORT:", this.port);
        });
    }
}