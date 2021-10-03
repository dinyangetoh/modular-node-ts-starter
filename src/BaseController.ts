import {Response} from "express";

enum ResponseStatus {
    Success = "success",
    Fail = 'fail',
    Error = "error"
}

type JsonResponse = {
    status: ResponseStatus;
    message: string;
    data?: Array<any> | string;
    error?: Array<any> | string;
}

type SuccessResponse = {
    message: string;
    data: Array<any> | string;
    res: Response;
}

type ErrorResponse = {
    message: string;
    error: Array<any> | string;
    res: Response;
    code?: number;
}

class BaseController {

    successResponse = (data: SuccessResponse) => {
        const responseData: JsonResponse = {
            status: ResponseStatus.Success,
            message: data.message,
            data: data.data
        }
        return data.res.json(responseData);
    }

    errorResponse = (data: ErrorResponse) => {
        const responseData: JsonResponse = {
            status: ResponseStatus.Fail,
            message: data.message,
            error: data.error
        }
        return data.res.status(data.code || 500).json(responseData);
    }
}


export default BaseController;