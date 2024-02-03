import z from "zod"

export const shippingStateSchema = z.object({
    name: z
    .string()
    .min(3, 'State Name is required.')
    .refine((value) => /^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(value), 'State Name should contain only alphabets.'),
})



export const shippingStateApiSchema = z.object({
    id:z.string(),
    name: z
    .string()
    .min(3, 'State Name is required.')
    .refine((value) => /^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(value), 'State Name should contain only alphabets.'),
})