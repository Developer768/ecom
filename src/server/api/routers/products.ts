import { splitTags } from "@/lib/utils";
import { productApiSchema, productSchema } from "@/schemas/productSchema";
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
        // console.log(input);
        const {
          slug,
          metaTitle,
          metaDescription,
          category,
          discount,
          tags,
          combination,
          desc,
          name,
          variants,
          details,
          images,
        } = input;
        const tagsArray = splitTags(tags);

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
            message: "Product already Exists. Please use new Slug.",
          };
        }

        await db.products.create({
          data: {
            name: name,
            slug: slug,
            desc: desc,
            discount: discount,
            metaTitle: metaTitle,
            metaDescription: metaDescription,
            tags: tagsArray,
            details: details,
            categoryId: category,
            variants: variants,
            combination: combination,
            images: images,
          },
        });
        return {
          error: "success",
          message: "Product created Successfully.",
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
        const postAlreadyExists = await db.products.findUnique({
          where: {
            id: input,
          },
        });
        // console.log(postAlreadyExists);
        if (!postAlreadyExists) {
          return {
            error: "error",
            message: "Product Doesn't exists.",
          };
        } else {
          await db.products.delete({
            where: {
              id: input,
            },
          });
          return {
            error: "success",
            message: "Product Deleted Successfully.",
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
    .input(productApiSchema)
    .mutation(async ({ input }) => {
      try {
        const {
          id,
          slug,
          metaTitle,
          metaDescription,
          category,
          discount,
          tags,
          combination,
          desc,
          name,
          variants,
          details,
          images,
        } = input;
        // console.log(input)
        const tagsArray = splitTags(tags);

        const ProductAlreadyExists = await db.products.findUnique({
          where: {
            id: id,
          },
        });
        if (!ProductAlreadyExists) {
          return {
            error: "error",
            message: "Product Doesn't exists.",
          };
        } else {
          await db.products.update({
            where: {
              id: id,
            },
            data: {
              name: name,
              slug: slug,
              desc: desc,
              discount: discount,
              metaTitle: metaTitle,
              metaDescription: metaDescription,
              tags: tagsArray,
              details: details,
              categoryId: category,
              variants: variants,
              combination: combination,
              images: images,
            },
          });
          return {
            error: "success",
            message: "Product updated Successfully.",
          };
        }
      } catch {
        return {
          error: "error",
          message: "Something went wrong. Please try again later.",
        };
      }
    }),
  getProducts: protectedProcedure
    .input(
      z.object({
        slug: z.string(),
        page: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const { slug, page } = input;
      try {
        console.log("Data =======> ", input);
        if (slug === "all") {
          const products = await db.products.findMany({
            include: {
              category: true,
            },
            orderBy: {
              createdAt: "desc", // 'desc' for descending order (latest first), 'asc' for ascending order
            },
            skip: parseInt(page),
            take: 12,
          });
          // console.log(products)
          return products
        }else {
          const products = await db.products.findMany({
            include: {
              category: true,
            },
            where:{

              category: {
                slug: slug,
              },
            },
            orderBy: {
              createdAt: "desc", // 'desc' for descending order (latest first), 'asc' for ascending order
            },
            skip: parseInt(page),
            take: 12,
          });
          // console.log(products)
          return products
        }
      } catch (err) {
        console.log(err);
        return {
          error: "error",
          message: "Something went wrong. Please try again later.",
        };
      }
    }),
});
