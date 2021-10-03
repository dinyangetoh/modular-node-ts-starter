"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./app/routes"));
const middleware_1 = require("./app/middleware");
const mongoose_1 = require("mongoose");
class App {
    constructor(port, middleware = middleware_1.appMiddlewares, apiPath = '/api') {
        this.port = port;
        this.apiPath = apiPath;
        this.app = (0, express_1.default)();
        this.routes();
        // this.middleware(middleware);
    }
    middleware(middlewares) {
        middlewares.forEach(middleware => {
            this.app.use(middleware);
        });
    }
    routes() {
        this.defaultRoute();
        const routesData = routes_1.default;
        routesData.forEach(route => {
            this.app.use(`${this.apiPath}`, route);
        });
    }
    defaultRoute() {
        this.app.get('/', (req, res) => res.send({
            status: "success",
            message: "Default route, Nothing happens here"
        }));
    }
    connectDB(dbUri) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Database configuration
                yield (0, mongoose_1.connect)(dbUri);
                console.log('Database connected successfully');
            }
            catch (err) {
                console.log('Error connecting Mongodb');
                console.log(err.message);
            }
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("APP LISTENING ON PORT:", this.port);
        });
    }
}
exports.App = App;
