import { blogPostApiSchema } from "@/schemas/blogPostSchema";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { db } from "@/server/db";
import { z } from "zod";

export const blogPostRouter = createTRPCRouter({
    addNewPost: protectedProcedure
    .input(blogPostApiSchema)
    .mutation(async ({ input }) => {
      try {
        const { title,summary,content, slug, metaTitle, metaDescription,category,discount,tags } = input;
        console.log(input);

        const slugAlreadyExists = await db.blogPosts.findFirst({
          where: {
            OR: [
              {
                title: title,
              },
              {
                slug: slug,
              },
            ],
          },
        });

        // console.log(slugAlreadyExists);

        if (slugAlreadyExists) {
          console.log("error");
          return {
            error: "error",
            message: "Slug already Exists. Please use new Slug.",
          };
        }

        await db.blogPosts.create({
          data: {
            title: title,
            slug: slug,
            summary: summary,
            content:content,
            metaTitle,
            metaDescription,
            categoryId:category,
            discount:discount,
            tags:tags,
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
  deletePost: protectedProcedure
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
  editPost: protectedProcedure
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