"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewHome = void 0;
const viewHome = (req, res, next) => {
    res.json({
        status: "Success",
        message: "Default home page"
    });
};
exports.viewHome = viewHome;
