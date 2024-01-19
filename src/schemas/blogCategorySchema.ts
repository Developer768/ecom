import z from "zod"

export const blogCategorySchema = z.object({
    categoryName: z.string().min(3,{message:"Category Name is required"}),
    slug: z.string().refine((value)=> /^[a-z-]+$/.test(value),"Please only use lower case letters and -"),
    desc: z.string().min(3,{message:"Description is required"}),
    metaTitle: z.string().min(3,{message:"Please add Meta Title for SEO."}),
    metaDescription: z.string().min(3,{message:"Please add Meta Description for SEO."}),
})

export const blogCategoryApiSchema = z.object({
    id: z.string(),
    categoryName: z.string().min(3,{message:"Category Name is required"}),
    slug: z.string().refine((value)=> /^[a-z-]+$/.test(value),"Please only use lower case letters and -"),
    desc: z.string().min(3,{message:"Description is required"}),
    metaTitle: z.string().min(3,{message:"Please add Meta Title for SEO."}),
    metaDescription: z.string().min(3,{message:"Please add Meta Description for SEO."}),
})