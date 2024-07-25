import { Request, Response } from 'express';

const UserFinances = async (req: Request, res: Response) => {
    if (!req.body) {
        return res.status(400).send({ message: "Data to Create can not be empty" });
    }
    console.log(req.body);
    // const privacy: PrivacyInterface = req.body;
    // const DocPri = new Privacy(privacy);
    // await DocPri.save((err, data) => {
    //     if (err) {
    //         res.status(500).send(err);
    //         return;
    //     }
    //     res.send(data);
    // });
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.body, null, 3));
}

export { UserFinances }
