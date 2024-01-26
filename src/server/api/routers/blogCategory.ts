import { categoryApiSchema, categorySchema } from "@/schemas/categorySchema";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { db } from "@/server/db";
import { z } from "zod";

export const blogCategoryRouter = createTRPCRouter({
    addNewCategory: protectedProcedure
    .input(categorySchema)
    .mutation(async ({ input }) => {
      try {
        const { categoryName, desc, slug, metaTitle, metaDescription } = input;
        // console.log(input);

        const slugAlreadyExists = await db.blogCategory.findFirst({
          where: {
            OR: [
              {
                category_name: categoryName,
              },
              {
                slug: slug,
              },
            ],
          },
        });

        console.log(slugAlreadyExists);

        if (slugAlreadyExists) {
          // console.log("error");
          return {
            error: "error",
            message: "Slug already Exists. Please use new Slug.",
          };
        }

        await db.blogCategory.create({
          data: {
            category_name: categoryName,
            slug: slug,
            description: desc,
            metaTitle,
            metaDescription,
          },
        });
        return {
          error: "success",
          message: "Blog Category created Successfully.",
        };
      } catch (err) {
        console.log(err);
        return {
          error: "error",
          message: "Something went wrong. Please try again later.",
        };
      }
    }),
  deleteCategory: protectedProcedure
    .input(z.string())
    .mutation(async ({ input }) => {
      try {
        const categoryAlreadyExists = await db.blogCategory.findUnique({
          where: {
            id: input,
          },
        });
        // console.log(categoryAlreadyExists);
        if (!categoryAlreadyExists) {
          return {
            error: "error",
            message: "Category Doesn't exists.",
          };
        } else {
          await db.blogCategory.delete({
            where: {
              id: input,
            },
          });
          return {
            error: "success",
            message: "Category Deleted Sucessfuly.",
          };
        }
      } catch {
        return {
          error: "error",
          message: "Something went wrong. Please try again later.",
        };
      }
    }),
  editCategory: protectedProcedure
    .input(categoryApiSchema)
    .mutation(async ({ input }) => {
      try {
        const { categoryName, desc, slug, id, metaTitle, metaDescription } =
          input;

        const blogCategoryAlreadyExists =
          await db.blogCategory.findUnique({
            where: {
              id: id,
            },
          });
        if (!blogCategoryAlreadyExists) {
          return {
            error: "error",
            message: "Product Category Doesn't exists.",
          };
        } else {
          await db.blogCategory.update({
            where: {
              id: id,
            },
            data: {
              category_name: categoryName,
              slug: slug,
              description: desc,
              metaTitle: metaTitle,
              metaDescription: metaDescription,
            },
          });
          return {
            error: "success",
            message: "Product Category updated Sucessfully.",
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