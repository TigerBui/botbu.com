
import * as express from "express";
import { Request, Response } from "express";
import IControllerBase from "server-dev/interfaces/IControllerBase.interface";
import { NativeApiRequest } from "../../snippet/native-api.request";

const optionsReq = {
    'method': 'GET',
    'hostname': 'api.currencyapi.com',
    'path': '/v3/latest',
    'headers': {
        'apikey': 'XHpMX4V405j5UGOkiA4Nam1gs6H8zgY0e5AwAQjP'
    },
    'maxRedirects': 20
};

class CurrencyApiController implements IControllerBase {
    public path: string = "/v1/currency/";
    private router = express.Router();
    constructor() {
        this.initRoutes();
    }

    public initRoutes() {
        this.router.get(this.path + 'list', this.currencyList);
    }

    currencyList(req: Request, res: Response) {
        try {
            let reqOp = optionsReq;
            NativeApiRequest(reqOp, (response: any) => {
                res.jsonp(JSON.parse(response));
            })
        } catch (err) {
            res.jsonp({ error: err });
        }
    }
}


export default CurrencyApiController;