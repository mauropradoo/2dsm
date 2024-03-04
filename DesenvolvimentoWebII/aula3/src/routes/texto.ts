import { Router } from "express";
import controller from "../controllers/Texto";

const router = Router();

router.get("/", controller.concatenar);

export default router;