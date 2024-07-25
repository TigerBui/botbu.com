
import * as express from "express";
import { Request, Response } from "express";
import IControllerBase from "server-dev/interfaces/IControllerBase.interface";
import moment from 'moment';
import path from 'path';

const googleTrends = require('google-trends-api');

class CadaoVietNamController implements IControllerBase {
    private URI: string = "https://cadaovietnam.com/api/client/v1/cadao/";
    public path: string = "/v1/cadaovietnam.com";
    private router = express.Router();
    dateTimeConfig = {
        formatDate: "YYYY-MM-DD"
    };
    toDay: string = moment().format(this.dateTimeConfig.formatDate);
    constructor() {
        this.initRoutes();
    }

    public initRoutes() {
        this.router.post(this.path + '/list', this.cadaoList);
    }

    cadaoList = async (req: Request, res: Response) => {
        
    }
}

export default CadaoVietNamController;