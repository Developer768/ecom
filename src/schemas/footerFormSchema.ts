import { z } from "zod";

export const footerFormSchema = z.object({
  name: z.string().min(3, { message: "Category Name is required" }),
  email: z.string().email({ message: "Email is required" }),
  type: z.enum(["accept"], {
    required_error: "You need to accept terms & conditions.",
  }),
});
