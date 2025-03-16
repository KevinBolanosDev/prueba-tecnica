import { productsSchema } from "../schema/products.schema.js";
import Products from "../models/products.model.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (error) {
      return res.status(500).json({ message: "Error al obtener los productos" });
  }
};

export const createProducts = async (req, res) => {
  try {
    const validatedData = productsSchema.parse(req.body);
    const newProducts = new Products(validatedData);
      
    const savedProducts = await newProducts.save();

    res.status(201).json({
      message: "Producto creado exitosamente",
      products: savedProducts,
    });
  } catch (error) {
      return res.status(500).json({ message: "Error al crear el producto" });
  }
};