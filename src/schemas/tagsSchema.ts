import z from "zod"

export const TagsSchema = z.object({
    name: z.string().min(3,{message:"Name should be at least 3 characters."}),
    description: z.string().min(3,{message:"Description should be at least 3 characters."}),
})

export const tagApiSchema = z.object({
    id: z.string(),
    name: z.string().min(3,{message:"Name should be at least 3 characters."}),
    description: z.string().min(3,{message:"Description should be at least 3 characters."}),
})