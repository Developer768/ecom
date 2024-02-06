import z from "zod";

export const checkoutSchema = z.object({
  firstName: z
    .string()
    .min(3, "First Name is required.")
    .refine(
      (value) => /^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(value),
      "First Name should contain only alphabets.",
    ),
  lastName: z
    .string()
    .min(3, "Last Name is required.")
    .refine(
      (value) => /^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(value),
      "Last Name should contain only alphabets.",
    ),
  State: z
    .string({
      required_error: "Please select a State.",
    })
    .min(1, { message: "Please Select State." }),
  County: z
    .string({
      required_error: "Please select a County.",
    })
    .min(1, { message: "Please Select County." }),

  shippingAddress: z
    .string({
      required_error: "Please add Shipping Address.",
    })
    .min(1, { message: "Please add Shipping Address." }),

  phoneNumber: z
    .string({
      required_error: "Please add Phone number.",
    })
    .refine(
        (value) => /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/.test(value),
        "Please add only USA phone number like (123) 123-1234",
      ),

//   products: z.any(),

//   subTotal: z
//     .string()
//     .refine(
//       (value) => /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(value),
//       "Please only use Numbers",
//     ),
//   totalPrice: z
//     .string()
//     .refine(
//       (value) => /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(value),
//       "Please only use Numbers",
//     ),
//   shippingFee: z
//     .string()
//     .refine(
//       (value) => /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(value),
//       "Please only use Numbers",
//     ),
//   paymentStatus: z.boolean(),
//   deliveryStatus: z.string({
//     required_error: "Please select Delivery Status.",
//   }),
});


export const checkoutApiSchema = z.object({
    firstName: z
      .string()
      .min(3, "First Name is required.")
      .refine(
        (value) => /^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(value),
        "First Name should contain only alphabets.",
      ),
    lastName: z
      .string()
      .min(3, "Last Name is required.")
      .refine(
        (value) => /^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(value),
        "Last Name should contain only alphabets.",
      ),
    state: z
      .string({
        required_error: "Please select a State.",
      })
      .min(1, { message: "Please Select State." }),
    county: z
      .string({
        required_error: "Please select a County.",
      })
      .min(1, { message: "Please Select County." }),
  
    shippingAddress: z
      .string({
        required_error: "Please add Shipping Address.",
      })
      .min(1, { message: "Please add Shipping Address." }),
  
    phoneNumber: z
      .string({
        required_error: "Please add Phone number.",
      })
      .refine(
          (value) => /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/.test(value),
          "Please add only USA phone number like (123) 123-1234",
        ),
        price: z.string(),
        products:z.any(),


      })