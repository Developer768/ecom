import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { db } from "@/server/db";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.post.create({
        data: {
          name: input.name,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),

  getLatest: protectedProcedure.query(({ ctx }) => {
    return ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
      where: { createdBy: { id: ctx.session.user.id } },
    });
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
  getPosts: publicProcedure
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
          const posts = await db.blogPosts.findMany({
            include: {
              category: true,
            },
            orderBy: {
              createdAt: "desc", // 'desc' for descending order (latest first), 'asc' for ascending order
            },
            skip: parseInt(page),
            take: 12,
          });
          // console.log(posts)
          return posts
        }else {
          const posts = await db.blogPosts.findMany({
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
          return posts
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
