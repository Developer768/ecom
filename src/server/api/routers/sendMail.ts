import { z } from "zod";
import nodemailer from "nodemailer";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { footerFormSchema } from "@/schemas/footerFormSchema";
import { contactFormSchema } from "@/schemas/contactFormSchema";

export const sendMailRouter = createTRPCRouter({
  contact: publicProcedure
    .input(
      footerFormSchema
    )
    .mutation(async ({ input }) => {
      console.log(input);

      try {
        const { name, email, type } = input;

        const transporter = nodemailer.createTransport({
          name: "My-Webpage",
          host: process.env.CONTACT_FORM_HOST,
          port: 465,
          secure: true,
          auth: {
            user: process.env.CONTACT_FORM_SEND_EMAIL,
            pass: process.env.CONTACT_FORM_PASS,
          },
          // send: true,
        });

        console.log(transporter);

        transporter.verify(function (error, success) {
          if (error) {
            console.log(error);
            return;
          } else {
            console.log("Server is ready to take our messages");
          }
        });

        const clientMail = await transporter.sendMail({
          from: process.env.CONTACT_FORM_SEND_EMAIL,
          to: `${name} ${email}`,
          subject: "Kratom Contact Form",
          text: `Name: ${name}\nE-mail: ${email}\n`,
        });

        console.log("Message sent: %s", clientMail.messageId);

        const ServerMail = await transporter.sendMail({
          from: process.env.CONTACT_FORM_SEND_EMAIL,
          to: `${name} ${process.env.CONTACT_FORM_RECEIVE_EMAIL}`,
          subject: "Kratom Contact Form",
          text: `Name: ${name}\nE-mail: ${email}\n`,
        });

        console.log("Message sent: %s", ServerMail.messageId);

        return {
          error: "success",
          message: "Email Sent Successfully.",
        };
      } catch (err) {
        return {
          error: "error",
          message: "Something went wrong. Please try again later.",
        }
      }
    }),
  contactUs: publicProcedure
    .input(
      contactFormSchema
    )
    .mutation(async ({ input }) => {
      console.log(input);

      try {
        const { firstname,lastname, email, phone,message } = input;
        console.log(input)

        const transporter = nodemailer.createTransport({
          name: "My-Webpage",
          host: process.env.CONTACT_FORM_HOST,
          port: 465,
          secure: true,
          auth: {
            user: process.env.CONTACT_FORM_SEND_EMAIL,
            pass: process.env.CONTACT_FORM_PASS,
          },
          // send: true,
        });

        // console.log(transporter);

        transporter.verify(function (error, success) {
          if (error) {
            console.log(error);
            return;
          } else {
            console.log("Server is ready to take our messages");
          }
        });

        const clientMail = await transporter.sendMail({
          from: process.env.CONTACT_FORM_SEND_EMAIL,
          to: `${name} ${email}`,
          subject: "Kratom Contact Form",
          text: `First Name: ${firstname}\nLast Name: ${lastname}\nE-mail: ${email}\nPhone Number: ${phone}\nMessage: ${message}\n`,
        });

        console.log("Message sent: %s", clientMail.messageId);

        const ServerMail = await transporter.sendMail({
          from: process.env.CONTACT_FORM_SEND_EMAIL,
          to: `${name} ${process.env.CONTACT_FORM_RECEIVE_EMAIL}`,
          subject: "Kratom Contact Form",
          text: `First Name: ${firstname}\nLast Name: ${lastname}\nE-mail: ${email}\nPhone Number: ${phone}\nMessage: ${message}\n`,
        });

        console.log("Message sent: %s", ServerMail.messageId);

        return {
          error: "success",
          message: "Email Sent Successfully.",
        };
      } catch (err) {
        return {
          error: "error",
          message: "Something went wrong. Please try again later.",
        }
      }
    }),
});
