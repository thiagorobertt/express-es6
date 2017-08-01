import Router from 'express';

export default class UserRouter {
    constructor() {}
    static get routes() {
        let router = Router();
        router.get('/', (req, res, next) => res.json({
            message: 'User Works!'
        }));
        return router;
    }
}
