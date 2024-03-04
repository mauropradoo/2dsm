import { Router } from "express";
import matematica from "./matematica";
import texto from "./texto";

const router = Router();

router.use("/matematica", matematica);
router.use("/texto", texto);

export default router;