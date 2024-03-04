import { Request, Response } from "express";

class Texto {
    concatenar(req:Request, res:Response){
        const {a,b} = req.body;
        const r:any = a + b;
        res.json({r});
    }
}

export default new Texto();