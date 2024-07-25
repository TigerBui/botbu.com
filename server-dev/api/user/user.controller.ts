import * as express from 'express';
import { Request, Response } from 'express';

import IControllerBase from '../../interfaces/IControllerBase.interface';
import { UserInterface } from './user.interface';
import Privacy from "./user.model";

class UserController implements IControllerBase {
  public path = '/api/v1/user';
  public router = express.Router();
  private user: UserInterface[] = [];
  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
      this.router.get(this.path, this.PrivacyList);
  }

  PrivacyList = async (req: Request, res: Response) => {
    // let DocPri = await Privacy.find({});
    // let countTotal = await Privacy.count({});
    // let resultDt: any = { data: DocPri, total: countTotal } || {};
    // try {
    //   res.send(JSON.stringify(resultDt, null, 3));
    //   res.end();
    // } catch (err) {
    //   res.status(500).send(err);
    // }
    res.send({Hi: "Welcome"});
  }

  PrivacyCreate = async (req: Request, res: Response) => {
    if (!req.body) {
      return res.status(400).send({ message: "Data to Create can not be empty" });
    }
    const privacy: UserInterface = req.body;
    const DocPri = new Privacy(privacy);
    await DocPri.save((err, data) => {
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.send(data);
    });
  }

  PrivacyUpdate = async (req: Request, res: Response) => {
    if (!req.body) {
      return res.status(400).send({ message: "Data to update can not be empty" });
    }

    const id = req.params.id;

    Privacy.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Tutorial width id=${id}. Maybe Privacy was not found!`
          });
        } else res.send({ message: "Privacy was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Privacy with id=" + id
        })
      })

  }

  PrivacyDelete = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      Privacy.findByIdAndDelete(id, (err, docs) => {
        if (err) {
          res.send({ message: err + ' ' + id });
        } else {
          res.send({ message: "Privacy was delete " + id });
        }
      })
    }
    catch (error) {
      res.status(500).send({ message: error + ' ' + id });
    }
  }
}

export default UserController;
