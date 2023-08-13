import { Request, Response } from "express";

const route = (routes: any) => {
    
    routes.get('/users', (req: Request, res: Response) => {
        res.send('Users GET');
    });

    routes.post('/users', (req: Request, res: Response) => {
        res.send('Users POST');
    });

}

module.exports = route;
