import z from "zod"

export const blogPostSchema = z.object({
    title: z.string().min(3,{message:"Title is required"}),
    slug: z.string().refine((value)=> /^[a-z-]+$/.test(value),"Please only use lower case letters and -"),
    // image: z.string(),
    summary: z.string().min(3,{message:"Summary is required"}),
    // content: z.object({}),
    // content: z.string().min(3,{message:"Content is required"}),
    category: z.string().min(3,{message:"Please Select Category."}),
    tags: z.string(),
    metaTitle: z.string().min(3,{message:"Please add Meta Title for SEO."}),
    metaDescription: z.string().min(3,{message:"Please add Meta Description for SEO."}),
})

export const blogPostApiSchema = z.object({
  id: z.string().min(3,{message:"Id is required"}).optional(),
  image: z.string(),
  title: z.string().min(3,{message:"Title is required"}),
  slug: z.string().refine((value)=> /^[a-z-]+$/.test(value),"Please only use lower case letters and -"),
  summary: z.string().min(3,{message:"Summary is required"}),
  content: z.string().min(3,{message:"Content is required"}),
  category: z.string().min(3,{message:"Please Select Category."}),
  tags: z.string().array(),
  // discount: z.string().refine((value)=> /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(value),"Please only use Numbers"),
  metaTitle: z.string().min(3,{message:"Please add Meta Title for SEO."}),
  metaDescription: z.string().min(3,{message:"Please add Meta Description for SEO."}),
})
