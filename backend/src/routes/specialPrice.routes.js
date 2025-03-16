import { Router } from "express";
import { createSpecialPrice, getSpecialPrices, updateSpecialPrice, validateUserSpecialPrices } from "../controllers/specialPrice.controller.js";

const router = Router();

router.get("/special-prices", getSpecialPrices);
router.get("/special-price/:userId", validateUserSpecialPrices);
router.post("/special-price", createSpecialPrice);
router.put("/special-price/:id", updateSpecialPrice);

export default router;