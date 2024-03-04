import { Request, Response } from "express";

function somar(req:Request,res:Response){
    const {x,y} = req.body;
    const r = x + y;
    return res.json({r});
}

function dif(req:Request,res:Response){
    const {x,y} = req.body;
    const r = x - y;
    return res.json({r});
}

export {somar,dif};