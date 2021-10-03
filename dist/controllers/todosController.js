"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const BaseController_1 = __importDefault(require("../BaseController"));
class TodoController extends BaseController_1.default {
    constructor() {
        super(...arguments);
        this.listTodos = (req, res, next) => {
            const TODOS = [
                {
                    id: Math.random().toString(),
                    name: "Don't mess with me"
                },
                {
                    id: Math.random().toString(),
                    name: "Start laundry"
                },
                {
                    id: Math.random().toString(),
                    name: "Make breakfast"
                },
                {
                    id: Math.random().toString(),
                    name: "Wash the car"
                },
            ];
            this.successResponse({ message: "New Listing todos", data: TODOS, res });
        };
        this.getTodo = (req, res) => {
            this.errorResponse({
                message: "Todo not found",
                error: "Not Found",
                res
            });
        };
    }
}
exports.TodoController = TodoController;
// export default TodoController;
