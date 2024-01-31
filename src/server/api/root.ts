import { postRouter } from "@/server/api/routers/post";
import { createTRPCRouter } from "@/server/api/trpc";
import { authRouter } from "./routers/auth";
import { userRouter } from "./routers/user";
import { categoryRouter } from "./routers/category";
import { blogCategoryRouter } from "./routers/blogCategory";
import { tagRouter } from "./routers/blogTags";
import { blogPostRouter } from "./routers/blogPost";
import { productsRouter } from "./routers/products";
import { sendMailRouter } from "./routers/sendMail";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  // post: postRouter,
  auth: authRouter,
  user: userRouter,
  category: categoryRouter,
  blogCategory: blogCategoryRouter,
  tag: tagRouter,
  post:blogPostRouter,
  product:productsRouter,
  mail: sendMailRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
