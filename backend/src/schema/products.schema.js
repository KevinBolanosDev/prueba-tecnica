import { z } from "zod";

export const productsSchema = z.object({
    name: z.string({
        required_error: "Name is required",
    }),
    description: z.string({
        required_error: "Description is required",
    }),
    basePrice: z.number({
        required_error: "Price is required",
    }),
    category: z.string({
        required_error: "Category is required",
    }),
})