import { z } from "zod";

export const user = z.object({
    name: z.string({
        required_error: "Name is required",
    }),
})