import { specialPricesSchema } from "../schema/specialPrices.schema.js";
import SpecialPrices from "../models/specialPrices.js";

export const getSpecialPrices = async (req, res) => {
  try {
      const specialPricesProducts = await SpecialPrices.find()
        .populate('productId', 'name description basePrice category -_id')
      .populate('userId', 'name -_id');

    const groupProductsCategory = specialPricesProducts.reduce((acc, price) => {
      const productCategory = price.productId.category;
      if (!acc[productCategory]) {
        acc[productCategory] = {
          product: price.
            productId,
          users: []
        };
      }

      acc[productCategory].users.push({
        user: price.userId,
        id: price._id,
        specialPrice: price.specialPrice
      });

      return acc;
    }, {});
    
    res.json({
        groupProductsCategory
    });
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener los productos con precios especiales" });
  }
};

export const createSpecialPrice = async (req, res) => {
  try {
    const validatedData = specialPricesSchema.parse(req.body);
      const newSpecialPrice = new SpecialPrices(validatedData);

      const savedSpecialPrice = await newSpecialPrice.save();
      res.status(201).json(savedSpecialPrice);
  } catch (error) {
    return res.status(500).json({ message: "Error al crear producto con precio especial" });
  }
}

export const validateUserSpecialPrices = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      return res.status(400).json({ message: "Falta el id del usuario" });
    }
    const specialPricesUsers = await SpecialPrices.find({ userId })
      .populate({ path: 'productId', select: 'name specialPrice category' })
    
    console.log(userId)
    console.log(specialPricesUsers)

    if(!specialPricesUsers || specialPricesUsers.length === 0) {
      return res.status(404).json({ message: "No se encontraron precios especiales para el usuario" });
    }

    const specialPricesCategory = specialPricesUsers.reduce((acc, special) => {
      const category = special.productId.category;
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push({
        productId: special.productId._id,
        productName: special.productId.name,
        specialPrice: special.specialPrice,
      })
      return acc;
    }, {})

    res.json({
      SpecialPrices: true,
      usersId: userId,
      specialPrices: specialPricesCategory
    })
  } catch (error) {
    res.status(500).json({ message: "Usuario no encontrado"})
  }
}

export const updateSpecialPrice = async (req, res) => {
  try {
        const { productId, userId, basePrice, specialPrice } = req.body;

        const existingSpecialPrice = await SpecialPrices.findOne({ productId, userId });

    if (existingSpecialPrice) {
            existingSpecialPrice.productId = productId;
            existingSpecialPrice.userId = userId;
            existingSpecialPrice.basePrice = basePrice;
            existingSpecialPrice.specialPrice = specialPrice;
            await existingSpecialPrice.save();
            res.json({ message: "Precio especial actualizado correctamente" });
        } else {
            const newSpecialPrice = new SpecialPrices({
                productId,
                userId,
                basePrice,
                specialPrice,
            });
            await newSpecialPrice.save();
      res.json({
        message: "Precio especial creado correctamente",
        newSpecialPrice
      });
        }
    } catch (error) {
        return res.status(500).json({ message: "Error al actualizar el precio especial" });
    }
};