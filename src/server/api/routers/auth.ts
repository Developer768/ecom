import { getUserByEmail } from "@/getData/user";
import { SignupSchema } from "@/schemas/signupSchema";
import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
  } from "@/server/api/trpc";
import { db } from "@/server/db";
import bcrypt from "bcrypt";


export const authRouter = createTRPCRouter({
    signup: publicProcedure.input(SignupSchema).mutation(async ({ input }) => {
        try {
          const { name, email, password } = input;
          const hasedPassword = await bcrypt.hash(password, 12);
    
          const userAlreadyExists = await getUserByEmail(email);
          // console.log(userAlreadyExists);
          if (userAlreadyExists) {
            return {
              error: "error",
              message: "User already exists.",
            };
          } else {
            await db.user.create({
              data: {
                name,
                email,
                password: hasedPassword,
              },
            });
            return {
              error: "success",
              message: "User created Sucessfuly.",
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