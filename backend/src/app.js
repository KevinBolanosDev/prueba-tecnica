import express from "express";
import morgan from "morgan";
import cors from "cors";
import productsRoutes from "./routes/products.routes.js";
import userRoutes from "./routes/user.routes.js";
import specialPriceRoutes from "./routes/specialPrice.routes.js";
import "dotenv/config"

const app = express();

//Comunicación entre servidores
app.use(
  cors({
    origin: process.env.APP_FRONT_DEPLOY,
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());

//Rutas de la api
app.use("/api", productsRoutes);
app.use("/api", userRoutes);
app.use("/api", specialPriceRoutes);

export default app;
