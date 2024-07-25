
import * as express from "express";
import { Request, Response } from "express";
import IControllerBase from "server-dev/interfaces/IControllerBase.interface";
import moment from 'moment';
import path from 'path';

const googleTrends = require('google-trends-api');

class GoogleController implements IControllerBase {
    public path: string = "/v1/google/keyword";
    private router = express.Router();
    dateTimeConfig = {
        formatDate: "YYYY-MM-DD"
    };
    toDay: string = moment().format(this.dateTimeConfig.formatDate);
    constructor() {
        this.initRoutes();
    }

    public initRoutes() {
        this.router.get(this.path + '/auto-complete', this.AutoComplete);
        this.router.get(this.path + '/categories/all', this.CategoriesAll);
        this.router.get(this.path + '/realtime-trends', this.RealtimeTrends);
        this.router.get(this.path + '/daily-trends', this.DailyTrends);
        this.router.get(this.path + '/related-topics', this.RelatedTopics);
        this.router.get(this.path + '/categories/item', this.CategoriesItem);
        this.router.get(this.path + '/interest-over-time', this.InterestOverTime);
        this.router.get(this.path + '/interest-by-region', this.InterestByRegion);
    }

    AutoComplete = async (req: Request, res: Response) => {
        const keyword = req.param('keyword');
        let kw = keyword ? keyword : 'Web Design';
        googleTrends.autoComplete({keyword: kw})
        .then((resp: string) => {
            res.send(JSON.parse(resp));
        })
        .catch((err: any) => {
            console.log('got the error', err);
            console.log('error message', err.message);
            console.log('request body',  err.requestBody);
        });
    }

    RelatedTopics = async (req: Request, res: Response) => {
        const topicsQuery: string = req.param('topics');
        let kw = topicsQuery ? topicsQuery : 'Design';
        const lastWeek = moment().day(-7).format(this.dateTimeConfig.formatDate);
        googleTrends.relatedTopics({keyword: [kw], startTime: new Date(lastWeek), endTime: new Date(Date.now()), geo: ['VN']})
        .then((resp: string) => {
            res.send(JSON.parse(resp));
        })
        .catch((err: Error) => {
            res.send(JSON.stringify(err, null, 3));
        })
    }

    RealtimeTrends = async (req: Request, res: Response) => {
        await googleTrends.realTimeTrends({
            geo: ['VN', 'US'],
            category: 'b',
        }, function(err: Error, results: string) {
            if (err) {
               console.log(err);
               res.send(JSON.stringify(err));
            } else {
              res.send(JSON.parse(results));
            } 
            res.end();
        });
    }
    DailyTrends = async (req: Request, res: Response) => {
        await googleTrends.dailyTrends({
            trendDate: new Date(Date.now()),
            geo: "VN",
            hl: 'vi',
            timezone: 1
          }, function(err: Error, results: string) {
            if (err) {
                res.send(err);
            }else{
                res.send(JSON.parse(results));
            }
          });
    }

    CategoriesAll = async (req: Request, res: Response) => {
        const fs = require('fs');
        fs.readFile(path.join(__dirname, '../../db/json.txt'), (err: Error, data: string) => {
            if(err) throw err;
            let categories = data;
            res.send(categories);
        })
    }

    CategoriesItem = async (req: Request, res: Response) => {
        await googleTrends.autoComplete({keyword: 'Back to School'})
            .then((results: string) => {
                res.send(JSON.parse(results))
            })
            .catch((err: Error) => {
                console.error(err);
            })
    }

    InterestOverTime = async (req: Request, res: Response) => {
        await googleTrends.interestOverTime({
            keyword: "/m/086df",
            startTime: new Date(Date.now() - (4 * 60 * 60 * 1000)),
            granularTimeResolution: true,
        }, function(err: Error, results: string) {
            if (err) console.error(err);
            else res.send(JSON.parse(results));
        });
    }

    InterestByRegion = async (req: Request, res: Response) => {
        const lastWeek = moment().day(-7).format(this.dateTimeConfig.formatDate);
        console.log(lastWeek);
        await googleTrends.interestByRegion({
            keyword: 'Donald Trump',
            startTime: new Date(lastWeek),
            endTime: new Date(Date.now()),
            resolution: 'CITY',
        })
        .then((results: string) => {
            res.send(JSON.parse(results));
        })
        .catch((err: Error) => {
            console.error(err);
        })
    }
}

export default GoogleController;