import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    basePrice: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Products", productsSchema);