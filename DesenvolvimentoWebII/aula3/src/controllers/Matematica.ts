import { Request, Response } from "express";

class Matematica{
    somar(req:Request, res:Response){
        const {x,y} = req.body;
        const r = x + y;
        return res.json({r});
    }

    subtrair(req:Request, res:Response){
        const {x,y} = req.body;
        const w = x - y;
        return res.json({w});
    }

}

export default new Matematica();