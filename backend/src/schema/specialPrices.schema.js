import { z } from "zod";

export const specialPricesSchema = z.object({
    productId: z.string({
        required_error: "Product ID is required",
    }),
    userId: z.string({
        required_error: "User ID is required",
    }),
    basePrice: z.number({
        required_error: "Price is required",
    }),
    specialPrice: z.number({
        required_error: "Price is required",
    }),
})
