import { Request, Response, Router, NextFunction } from "express";

class CmsController {
    private path = '/api/v1/cms/';
    private router = Router();

    constructor() {
        this.initRoutes();
    }

    private initRoutes() {
        this.router.get(this.path + '*', this.requireLogin);
        this.router.post(this.path + '/sigin', this.apiSigin);
    }

    apiSigin(req: Request, res: Response) {
        const {userName, password} = req.body;
        const user = {
            userName: userName,
            role: 'admin'
        };
        // const token = jwt.sign(user, SECRET, {expiresIn: 600});
    }

    requireLogin(req: Request, res: Response, next: NextFunction) {
        // @ts-ignore
        if(req.session.loggedIn) {
            next();
        } else {
            this.loginPage(req, res);
        }
    }

    loginPage(req: Request, res: Response) {
        res.send({login: 'redirect'});
    }
}
