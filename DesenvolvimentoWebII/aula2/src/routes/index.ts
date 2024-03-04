import { Router } from "express";
import { dif, somar } from "./matematica";

const routes =  Router (); 

routes.get("/soma", somar);
routes.get("/dif", dif);

export default routes;