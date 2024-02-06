import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { db } from "@/server/db";
import { checkoutApiSchema } from "@/schemas/checkoutSchema";
// import { stripe } from "@/lib/stripe";
import type Stripe from 'stripe'

const stripe =require("stripe")(process.env.STRIPE_SECRET_KEY);

export const checkoutRouter = createTRPCRouter({
  createPaymentIntent: publicProcedure
    .input(checkoutApiSchema)
    .mutation(async ({ input }) => {
      try {
        const {
          county,
          firstName,
          lastName,
          phoneNumber,
          price,
          shippingAddress,
          state,
          products,
        } = input;

        const order = await db.orders.create({
          data: {
            firstName: firstName,
            lastName: lastName,
            State: state,
            County: county,
            shippingAddress: shippingAddress,
            phoneNumber: phoneNumber,
            products: products,
            totalPrice: price,
          },
        });

        // const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = []

        // line_items.push({

        // })

        try {
            // const stripeSession = await stripe.checkout.sessions.create({
            //     success_url: `/success?session_id={CHECKOUT_SESSION_ID}`,
            //     cancel_url: `/cart`,
            //     payment_method_types: ["card"],
            //     mode:"payment",
            //     submit_type:"pay",
            //     shipping_address_collection:{
            //         allowed_countries: ['US'],
            //     },
            // })

            stripe.charges.create({
                source: req.body.tokenId,
                amount: req.body.amount,
                currency: "usd",
            }, (stripeErr, stripeRes) =>{
                if(stripeErr){
                    res.send(stripeErr)
                }else{
                    res.send(stripeRes)
                }
            });

        } catch (err) {
          return {
            error: "error",
            message: "Could not connect to Stripe.",
          };
        }

        return {
          error: "success",
          message: "Payment Intent created successfully.",
        };
      } catch (err) {
        return {
          error: "error",
          message: "Something went wrong. Please try again later.",
        };
      }
    }),
    payment: publicProcedure
    .input(z.object({
        tokenId:z.string(),
        amount:z.string()
    }))
    .mutation(async ({ input }) => {
        stripe.charges.create({
            source: input.tokenId,
            amount: parseFloat(input.amount),
            currency: "usd",
        }, (stripeErr, stripeRes) =>{
            if(stripeErr){
                return {
                    error: "error",
                    message: "Something went wrong creating Stripe Charges.",
                  };
            }else{
                return stripeRes
            }
        });
    })
});
