import { Router } from "express";
import { getProducts, createProducts } from "../controllers/products.controller.js";

const router = Router();

/* router.get("/products", (req, res) => {
    res.json({
        message: "Probando ruta"
    })
}) */

router.get("/products", getProducts);
router.post("/product", createProducts);


export default router;