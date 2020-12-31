import { ErrorRessponse } from '../models/others/error-response';

export abstract class HttpResponseHelper {

    public static mapErrorResponse(error: any): ErrorRessponse{
        let err: ErrorRessponse;
        try{
            err = error.error;
        }catch{
            err = {
                statusCode: 400,
                message: "Algo errado 🙁..."
            }
        }
    
        return err || {
            statusCode: 400,
            message: "Algo errado 🙁..."
        };
    }
}