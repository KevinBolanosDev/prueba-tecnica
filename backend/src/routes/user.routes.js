import { Router } from "express";
import { getUser, createUser } from "../controllers/user.controller.js";

const router = Router();

router.get("/users", getUser);
router.post("/user", createUser);

export default router;