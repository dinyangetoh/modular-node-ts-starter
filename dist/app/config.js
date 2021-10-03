"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const config = {
    port: process.env.PORT || 8088,
    dbUri: process.env.DB_URI || "mongodb://localhost/app-starter"
};
exports.default = config;
