import { user } from "../schema/user.schema.js";
import User from "../models/user.model.js";

export const getUser = async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
      return res.status(500).json({ message: "Error al obtener los usuarios" });
  }
};

export const createUser = async (req, res) => {
  try {
    const validatedData = user.parse(req.body);
        const newUser = new User(validatedData);

        const savedUser = await newUser.save();

        res.status(201).json({
            message: "Usuario creado correctamente",
            data: savedUser,
        });
    } catch (error) {
        return res.status(500).json({ message: "Error al crear el usuario" });
    }
};