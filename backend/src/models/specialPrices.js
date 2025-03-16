import mongoose from "mongoose";

const specialPrices = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products',
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    basePrice: {
        type: Number,
        required: true,
    },
    specialPrice: {
        type: Number,
        required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("SpecialPrice", specialPrices);