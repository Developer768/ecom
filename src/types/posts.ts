import { blogCategory } from "@prisma/client"

export type PostType = {
    title: string,
    slug: string,
    summary: string,
    content: string,
    // content: z.string().min(3,{message:"Content is required"}),
    category: string,
    tags: string,
    discount: string,
    metaTitle: string,
    metaDescription: string,
}


export type PrismaPostType={
    id:string,
    title: string,
    slug: string,
    summary: string,
    content: string,
    tags: string[],
    discount: string,
    metaTitle: string,
    metaDescription: string,
    categoryId: string,
    category: blogCategory,
    createdAt: any,
    updatedAt: any,

}

