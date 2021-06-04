import { ErrorResponse } from '../models/others/error-response';

export abstract class HttpResponseHelper {

    public static mapErrorResponse(error: any): ErrorResponse{

        const err: ErrorResponse = error?.error?.message ? error?.error : {
            statusCode: 400,
            message: "Algo errado 🙁..."
        };
    
        return err;
    }
}