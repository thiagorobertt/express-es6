import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import UserRouter from './user/user.router';

class App {
    express;
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    middleware() {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({
            extended: false
        }));
        this.express.use(function (req, res, next) {
            console.log('LOGGED');
            next();
        });
    }
    routes() {
        let router = express.Router();
        // placeholder route handler
        router.get('/', (req, res) => {
            res.json({
                message: 'API Works!'
            });
        });
        this.express.use('/', router);
        this.express.use('/user', UserRouter.routes);
    }
};
export default new App().express;