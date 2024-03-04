import { Router } from "express";
import controller from "../controllers/Matematica";

const router = Router();

router.get("/", controller.somar);
router.post("/", controller.subtrair);

export default router;