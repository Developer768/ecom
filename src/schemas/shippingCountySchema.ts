import z from "zod"

export const shippingCountySchema = z.object({
    name: z
    .string()
    .min(3, 'State Name is required.')
    .refine((value) => /^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(value), 'State Name should contain only alphabets.'),
    state: z.string({
        required_error: "Please select a State.",
      }).min(1,{message:"Please Select State."}),
    totalPrice: z.string().refine(
        (value) => /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(value),
        "Please only use Numbers",
      ),
    shippingCost: z.string().refine(
        (value) => /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(value),
        "Please only use Numbers",
      ),
})



export const shippingCountyApiSchema = z.object({
    id:z.string(),
    name: z
    .string()
    .min(3, 'State Name is required.')
    .refine((value) => /^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(value), 'State Name should contain only alphabets.'),
    state: z.string({
        required_error: "Please select a State.",
      }).min(1,{message:"Please Select State."}),
    totalPrice: z.string().refine(
        (value) => /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(value),
        "Please only use Numbers",
      ),
    shippingCost: z.string().refine(
        (value) => /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(value),
        "Please only use Numbers",
      ),
})