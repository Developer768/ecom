import z from "zod";

export const EditUserSchema = z.object({
  id: z.string(),
  name: z.string().min(3, { message: "Name should be at least 3 characters." }),
  email: z.string().email({ message: "Email is required" }),
  password: z
    .string()
    .min(6, { message: "Password should be at least 6 characters." }),
});
