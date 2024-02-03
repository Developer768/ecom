import { z } from "zod";
import nodemailer from "nodemailer";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "@/server/api/trpc";
import { shippingStateApiSchema, shippingStateSchema } from "@/schemas/shippingStateSchema";
import { db } from "@/server/db";
import { shippingCountyApiSchema, shippingCountySchema } from "@/schemas/shippingCountySchema";

export const shippingCountiesRouter = createTRPCRouter({
  addnew: protectedProcedure
    .input(
        shippingCountySchema
    )
    .mutation(async ({ input }) => {
        const { name,shippingCost,state,totalPrice} = input;
        try {

            const countyAlreadyExists = await db.counties.findFirst({
              where:{
                name: name
              }
            })
            if (countyAlreadyExists) {
              console.log("error");
              return {
                error: "error",
                message: "County already Exists.",
              };
            }
    
            await db.counties.create({
              data: {
                name,
                StateId: state,
                orderPrice: totalPrice,
                shippingCost:shippingCost
              },
            });
            return {
              error: "success",
              message: "County created Successfully.",
            };
          } catch (err) {
            console.log(err);
            return {
              error: "error",
              message: "Something went wrong. Please try again later.",
            };
          }
    }),
    deleteShippingCounty: protectedProcedure
    .input(z.string())
    .mutation(async ({ input }) => {
      try {
        const shippingCountyAlreadyExists = await db.counties.findUnique({
          where: {
            id: input,
          },
        });
        // console.log(categoryAlreadyExists);
        if (!shippingCountyAlreadyExists) {
          return {
            error: "error",
            message: "Shipping County Doesn't exists.",
          };
        } else {
          await db.counties.delete({
            where: {
              id: input,
            },
          });
          return {
            error: "success",
            message: "Shipping County Deleted Successfully.",
          };
        }
      } catch {
        return {
          error: "error",
          message: "Something went wrong. Please try again later.",
        };
      }
    }),
    editshippingCounty: protectedProcedure
    .input(shippingCountyApiSchema)
    .mutation(async ({ input }) => {
      try {
        const {  id, name,shippingCost,state,totalPrice } = input;

        const shippingCountyAlreadyExists =
          await db.counties.findUnique({
            where: {
              id: id,
            },
          });
        if (!shippingCountyAlreadyExists) {
          return {
            error: "error",
            message: "Shipping County Doesn't exists.",
          };
        } else {
          await db.counties.update({
            where: {
              id: id,
            },
            data: {
              name:name,
              orderPrice:totalPrice,
              shippingCost: shippingCost,
              StateId: state
            },
          });
          return {
            error: "success",
            message: "Shipping County updated Successfully.",
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
