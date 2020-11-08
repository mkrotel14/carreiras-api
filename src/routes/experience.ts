import { Router } from "express";
import { checkJwt } from "../middlewares/checkJwt";
import ExperienceController from "../controller/ExperienceController";

const router = Router();
const experienceController = new ExperienceController();

router.get("/", experienceController.all);
router.post("/", experienceController.save);

export default router;