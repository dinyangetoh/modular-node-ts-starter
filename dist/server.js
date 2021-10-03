"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const config_1 = __importDefault(require("./app/config"));
const app = new app_1.App(+config_1.default.port);
app.connectDB(config_1.default.dbUri);
app.listen();
