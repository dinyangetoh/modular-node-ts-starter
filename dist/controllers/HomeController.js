"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeController = void 0;
const BaseController_1 = __importDefault(require("../BaseController"));
class HomeController extends BaseController_1.default {
    constructor() {
        super();
    }
    index(req, res) {
        res.json({
            status: "Success",
            message: "Default home page"
        });
    }
}
exports.HomeController = HomeController;
