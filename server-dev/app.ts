import express from 'express'
import { Application } from 'express'
import * as path from 'path';
import mongoose from "mongoose";
import jwtIoConfig from "./config/jwt-io.config";

class App {
    public app: Application;
    public port: number;

    constructor(appInit: { port: number; middleWares: any; controllers: any; }) {
        this.app = express();
        this.port = appInit.port;

        this.mongodbConfig();
        this.middlewares(appInit.middleWares);
        this.routes(appInit.controllers);
        this.assets();
        this.template()
    }

    private mongodbConfig(): void {
      let MONGO_URI = 'mongodb://127.0.0.1/tigerjs-tech';
      mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
      let db = mongoose.connection;
      db.on("error", console.error.bind(console, "MongoDB Connection Error"));
      db.on("open", () => {
        console.log("MONGODB is connected!");
      })
    }

    private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void; }) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare)
        })
    }

    private routes(controllers: { forEach: (arg0: (controller: any) => void) => void; }) {
        // this.app.use(jwtIoConfig);
        controllers.forEach(controller => {
            this.app.use('/api', controller.router);
        });
    }

    private assets() {
        // this.app.use(express.static(path.join(__dirname, './build/assets')));
        // this.app.use(express.static('build'));
    }

    private template() {
        // this.app.set('views', path.join(__dirname, '../build'));
        // this.app.engine('html', require('ejs').renderFile);
        // this.app.set('view engine', 'html');
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the http://localhost:${this.port}`)
        })
    }

}

export default App;
