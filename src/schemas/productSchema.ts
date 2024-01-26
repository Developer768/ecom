import z from "zod";

export const productSchema = z.object({
  name: z.string().min(3, { message: "Product Name is required" }),
  slug: z
    .string()
    .refine(
      (value) => /^[a-z-]+$/.test(value),
      "Please only use lower case letters and -",
    ),
    images: z.any(),
  desc: z.string().min(3, { message: "Description is required" }),
  discount: z
    .string()
    .refine(
      (value) => /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(value),
      "Please only use Numbers",
    ),
    details: z.any(),
  category: z.string().min(3, { message: "Please Select Category." }),
  tags: z.string(),
  metaTitle: z.string().min(3, { message: "Please add Meta Title for SEO." }),
  metaDescription: z
    .string()
    .min(3, { message: "Please add Meta Description for SEO." }),
  variants: z
    .array(
      z.object({
        name: z.string().min(3, { message: "Variant Name is required" }),
        variations:  z.string().min(3, { message: "Variant Option is required" }).refine(
            (value) => /^[a-zA-Z,1-9 0]+$/.test(value),
            "Please only use english alphabets and ,",
          ),
      }),
    )
    ,
//   variants: z
//     .array(
//       z.object({
//         name: z.string().min(3, { message: "Variant Name is required" }),
//         variations: z.array(
//           z.object({
//             name: z.string().min(3, { message: "Variant Option is required" }),
//           }),
//         ),
//       }),
//     )
//     .optional(),
  combination: z.object({
    name:z.string().min(3, { message: "Variant Combination is required" }),
    price: z.string().refine(
        (value) => /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(value),
        "Please only use Numbers",
      ),
  }).array(),
});



export const productApiSchema = z.object({
  id: z.string().min(3,{message:"Id is required"}).optional(),
  name: z.string().min(3, { message: "Product Name is required" }),
  slug: z
    .string()
    .refine(
      (value) => /^[a-z-]+$/.test(value),
      "Please only use lower case letters and -",
    ),
    images: z.any(),
  desc: z.string().min(3, { message: "Description is required" }),
  discount: z
    .string()
    .refine(
      (value) => /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(value),
      "Please only use Numbers",
    ),
    details: z.any(),
  category: z.string().min(3, { message: "Please Select Category." }),
  tags: z.string(),
  metaTitle: z.string().min(3, { message: "Please add Meta Title for SEO." }),
  metaDescription: z
    .string()
    .min(3, { message: "Please add Meta Description for SEO." }),
  variants: z
    .array(
      z.object({
        name: z.string().min(3, { message: "Variant Name is required" }),
        variations:  z.string().min(3, { message: "Variant Option is required" }).refine(
            (value) => /^[a-zA-Z,1-9 0]+$/.test(value),
            "Please only use english alphabets and ,",
          ),
      }),
    )
    ,
//   variants: z
//     .array(
//       z.object({
//         name: z.string().min(3, { message: "Variant Name is required" }),
//         variations: z.array(
//           z.object({
//             name: z.string().min(3, { message: "Variant Option is required" }),
//           }),
//         ),
//       }),
//     )
//     .optional(),
  combination: z.object({
    name:z.string().min(3, { message: "Variant Combination is required" }),
    price: z.string().refine(
        (value) => /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(value),
        "Please only use Numbers",
      ),
  }).array(),
});
