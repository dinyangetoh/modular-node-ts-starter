"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const app = new app_1.App(9000, []);
const dbUri = process.env.DB_URI || "'mongodb://localhost/app-starter";
app.connectDB(dbUri);
app.listen();
