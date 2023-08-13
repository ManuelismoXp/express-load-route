import { Request, Response } from "express";

const route = (routes: any) => {
    
    routes.get('/roles', (req: Request, res: Response) => {
        res.send('Roles GET');
    });

    routes.post('/roles', (req: Request, res: Response) => {
        res.send('Roles POST');
    });

}

module.exports = route;
