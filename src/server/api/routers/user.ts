import { getUserByEmail, getUserById } from "@/getData/user";
import { EditUserSchema } from "@/schemas/editUserSchema";
import { SignupSchema } from "@/schemas/signupSchema";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { db } from "@/server/db";
import bcrypt from "bcrypt";
import { z } from "zod";

export const userRouter = createTRPCRouter({
  uploadImage: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        avatar: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      try {
        const { id, avatar } = input;
        const res = await db.user.update({
          where: {
            id,
          },
          data: {
            avatar,
          },
        });
        console.log(res)
        if (!res) {
          return {
            error: "error",
            message: "Something went wrong. Please try again later.",
          };
        }

        return {
            error: "success",
            message: "Image Uploaded Successfully.",
          };

      } catch {
        return {
          error: "error",
          message: "Something went wrong. Please try again later.",
        };
      }
    }),
    editUser: protectedProcedure.input(EditUserSchema).mutation(async ({ input }) => {
        try {
          const { id, name, email, password } = input;
          const hasedPassword = await bcrypt.hash(password, 12);
    
          const userAlreadyExists = await getUserByEmail(email);
          console.log(userAlreadyExists);
          if (!userAlreadyExists) {
            return {
              error: "error",
              message: "User Doesn't exists.",
            };
          } else {
            await db.user.update({
                where:{
                    id: id
                },
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
    deleteUser: protectedProcedure.input(z.string()).mutation(async ({ input }) => {
        try {
    
          const userAlreadyExists = await getUserById(input);
          console.log(userAlreadyExists);
          if (!userAlreadyExists) {
            return {
              error: "error",
              message: "User Doesn't exists.",
            };
          } else {
            await db.user.delete({
                where:{
                    id: input
                }
              });
            return {
              error: "success",
              message: "User Deleted Sucessfuly.",
            };
          }
        } catch {
          return {
            error: "error",
            message: "Something went wrong. Please try again later.",
          };
        }
      }),
});
