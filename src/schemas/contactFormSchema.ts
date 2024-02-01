import { z } from "zod";

export const contactFormSchema = z.object({
  firstname: z.string().min(3, { message: "First Name is required" }),
  lastname: z.string().min(3, { message: "Last Name is required" }),
  phone: z
    .string()
    .min(7, { message: "Phone Number cannot be less than 7 numbers long." })
    .regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/, {
      message: "Please enter only numbers",
    })
    .max(15, { message: "Phone Number cannot be more than 15 numbers long." }),
  email: z.string().email({ message: "Email is required" }),
  message: z.string().min(3, { message: "Message is required" }),
});
