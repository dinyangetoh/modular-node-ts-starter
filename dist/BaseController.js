"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus["Success"] = "success";
    ResponseStatus["Fail"] = "fail";
    ResponseStatus["Error"] = "error";
})(ResponseStatus || (ResponseStatus = {}));
class BaseController {
    constructor() {
        this.successResponse = (data) => {
            const responseData = {
                status: ResponseStatus.Success,
                message: data.message,
                data: data.data
            };
            return data.res.json(responseData);
        };
        this.errorResponse = (data) => {
            const responseData = {
                status: ResponseStatus.Fail,
                message: data.message,
                error: data.error
            };
            return data.res.status(data.code || 500).json(responseData);
        };
    }
}
exports.default = BaseController;
