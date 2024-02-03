import { z } from "zod";
import nodemailer from "nodemailer";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "@/server/api/trpc";
import { shippingStateApiSchema, shippingStateSchema } from "@/schemas/shippingStateSchema";
import { db } from "@/server/db";

export const shippingStatesRouter = createTRPCRouter({
  addnew: protectedProcedure
    .input(
        shippingStateSchema
    )
    .mutation(async ({ input }) => {
        const { name} = input;
        try {

            const stateAlreadyExists = await db.states.findFirst({
              where:{
                name: name
              }
            })
            if (stateAlreadyExists) {
              console.log("error");
              return {
                error: "error",
                message: "State already Exists.",
              };
            }
    
            await db.states.create({
              data: {
                name
              },
            });
            return {
              error: "success",
              message: "State created Successfully.",
            };
          } catch (err) {
            console.log(err);
            return {
              error: "error",
              message: "Something went wrong. Please try again later.",
            };
          }
    }),
    deleteShippingState: protectedProcedure
    .input(z.string())
    .mutation(async ({ input }) => {
      try {
        const shippingStateAlreadyExists = await db.states.findUnique({
          where: {
            id: input,
          },
        });
        // console.log(categoryAlreadyExists);
        if (!shippingStateAlreadyExists) {
          return {
            error: "error",
            message: "Shipping State Doesn't exists.",
          };
        } else {
          await db.states.delete({
            where: {
              id: input,
            },
          });
          return {
            error: "success",
            message: "Shipping State Deleted Successfully.",
          };
        }
      } catch {
        return {
          error: "error",
          message: "Something went wrong. Please try again later.",
        };
      }
    }),
    editshippingState: protectedProcedure
    .input(shippingStateApiSchema)
    .mutation(async ({ input }) => {
      try {
        const {  id, name } = input;

        const shippingStateAlreadyExists =
          await db.states.findUnique({
            where: {
              id: id,
            },
          });
        if (!shippingStateAlreadyExists) {
          return {
            error: "error",
            message: "Shipping State Doesn't exists.",
          };
        } else {
          await db.states.update({
            where: {
              id: id,
            },
            data: {
              name:name
            },
          });
          return {
            error: "success",
            message: "Shipping State updated Successfully.",
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
