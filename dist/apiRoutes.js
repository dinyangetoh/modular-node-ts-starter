"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const home_routes_1 = __importDefault(require("./routes/home.routes"));
const todos_routes_1 = __importDefault(require("./routes/todos.routes"));
const apiRoutes = [
    home_routes_1.default,
    todos_routes_1.default
];
exports.default = apiRoutes;
