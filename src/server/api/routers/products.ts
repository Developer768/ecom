import { blogPostApiSchema } from "@/schemas/blogPostSchema";
import { productSchema } from "@/schemas/productSchema";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { db } from "@/server/db";
import { z } from "zod";

export const productsRouter = createTRPCRouter({
    addNewProduct: protectedProcedure
    .input(productSchema)
    .mutation(async ({ input }) => {
      try {
        const { slug, metaTitle, metaDescription,category,discount,tags,combination,desc,name,variants,details } = input;
        console.log(input);

        const slugAlreadyExists = await db.products.findFirst({
          where: {
            OR: [
              {
                name: name,
              },
              {
                slug: slug,
              },
            ],
          },
        });


        if (slugAlreadyExists) {
          return {
            error: "error",
            message: "Slug already Exists. Please use new Slug.",
          };
        }

        await db.products.create({
          data: {
            name:name,
            slug:slug,
            desc: desc,
            discount:discount,
            metaTitle:metaTitle,
            metaDescription:metaDescription,
            tags: tags,
            details: details,
            categoryId: category,
            variants: variants,
            combination: combination,
          },
        });
        return {
          error: "success",
          message: "Blog Post created Successfully.",
        };
      } catch (err) {
        console.log(err);
        return {
          error: "error",
          message: "Something went wrong. Please try again later.",
        };
      }
    }),
  deleteProduct: protectedProcedure
    .input(z.string())
    .mutation(async ({ input }) => {
      try {
        const postAlreadyExists = await db.blogPosts.findUnique({
          where: {
            id: input,
          },
        });
        // console.log(postAlreadyExists);
        if (!postAlreadyExists) {
          return {
            error: "error",
            message: "Post Doesn't exists.",
          };
        } else {
          await db.blogPosts.delete({
            where: {
              id: input,
            },
          });
          return {
            error: "success",
            message: "Post Deleted Successfully.",
          };
        }
      } catch {
        return {
          error: "error",
          message: "Something went wrong. Please try again later.",
        };
      }
    }),
  editProduct: protectedProcedure
    .input(blogPostApiSchema)
    .mutation(async ({ input }) => {
      try {
        const {  slug, id, metaTitle, metaDescription,category,content,discount,summary,tags,title } = input;
        // console.log(input)
        console.log("=================================================================")
        console.log(input)

        const blogPostAlreadyExists =
          await db.blogPosts.findUnique({
            where: {
              id:id,
            },

          });
        if (!blogPostAlreadyExists) {
          return {
            error: "error",
            message: "Post Doesn't exists.",
          };
        } else {
          
          await db.blogPosts.update({
            where: {
              id: id,
            },
            data: {
              title: title,
              slug: slug,
              content:content,
              tags: tags,
              summary:summary,
              categoryId:category,
              discount:discount,
              metaTitle: metaTitle,
              metaDescription: metaDescription,
            },
          });
          return {
            error: "success",
            message: "Post updated Successfully.",
          };
        }
      } catch {
        return {
          error: "error",
          message: "Something went wrong. Please try again later.",
        };
      }
    }),
})