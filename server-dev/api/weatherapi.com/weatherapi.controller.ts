
import * as express from "express";
import { Request, Response } from "express";
import IControllerBase from "server-dev/interfaces/IControllerBase.interface";
let http = require('follow-redirects').http;

const optionsReq = {
    'method': 'GET',
    'hostname': 'api.weatherapi.com',
    'path': '/v1',
    'headers': {
        'key': 'ef7a5a4e471c4d858b7153825222305'
    },
    'maxRedirects': 20
};

class WeatherApiController implements IControllerBase {
    public path: string = "/v1/weather/";
    private router = express.Router();
    constructor() {
        this.initRoutes();
    }

    public initRoutes() {
        this.router.get(this.path + 'current', this.currentJson);
    }

    currentJson(req: Request, res: Response) {
        try {
            let reqOp = optionsReq;
            reqOp.path += '/current.json?q=HaNoi';
            callApiData(reqOp, (response) => {
                res.jsonp(JSON.parse(response));
            })
        } catch (err) {
            res.jsonp({error: err});
        }
    }
}

function callApiData (options: any, callback: FunctionStringCallback) {
    const req = http.request(options, (res: any) => {
        let chunks: any = [];
      
        res.on("data", (chunk: any) => {
          chunks.push(chunk);
        });
      
        res.on("end", (chunk: any) => {
          var body = Buffer.concat(chunks);
          callback(body.toString());
        });
      
        res.on("error", (error: any) => {
            callback(error.toString());
        });
      });
      
      req.end();
}

export default WeatherApiController;