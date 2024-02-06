"use client";
import { CountiesType, StatesType } from "@/types/shipping";
import React, { useEffect, useState, useTransition } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { apiReplyType } from "@/types";
import { checkoutSchema } from "@/schemas/checkoutSchema";
import { api } from "@/trpc/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Icons } from "@/lib/Icons";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./ui/command";
import LinkButton from "./customUI/LinkButton";
// import StripeCheckout from "react-stripe-checkout";

type Props = {
  states: StatesType[];
  counties: CountiesType[];
};

const Checkout = (props: Props) => {
  // const [stripeToken, setStripeToken] = useState(null);
  const checkout = api.checkout.createPaymentIntent.useMutation();
  const checkoutpayment = api.checkout.payment.useMutation();

  // const onToken = async (token) => {
  //   console.log("Token", token);
  //   setStripeToken(token);
  // };
  // useEffect(() => {
  //   const makeRequest = async () => {
  //     const apiResult = await checkoutpayment.mutateAsync({
  //       tokenId: stripeToken.id,
  //       amount: (parseFloat(TotalPrice) * 100).toString()
  //     });
  //     console.log("Stripe Response", apiResult)
  //   };

  //   stripeToken && makeRequest();
  // }, [stripeToken]);

  let subTotal = useSelector((state) => state.cartReducer.total);
  const products = useSelector((state) => state.cartReducer.products);

  const [shipping, setShipping] = useState("0");
  const [TotalPrice, setTotalPrice] = useState(subTotal);
  const [selectedState, setselectedState] = useState<string>("");
  const [filteredCounties, setFilteredCounties] = useState(props.counties);

  const dispatch = useDispatch();

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [formError, setFormError] = useState<apiReplyType>({
    error: "",
    message: "",
  });

  const form = useForm<z.infer<typeof checkoutSchema>>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      shippingAddress: "",
      phoneNumber: "",
      // subTotal: "",
      // totalPrice: "",
      // shippingFee: "",
      // deliveryStatus: "pending",
      // paymentStatus: false,
    },
  });

  useEffect(() => {
    setselectedState(form.getValues("State"));
    console.log(form.getValues("State"));
  });

  const filterCountiesBasedOnState = (stateID: string) => {
    const countiesfilteredData = props.counties.filter((item) => {
      return item.state.id === stateID;
    });
    setFilteredCounties(countiesfilteredData);
  };

  // const checkout = api.checkout.createPaymentIntent.useMutation();
  const onSubmit = async (values: z.infer<typeof checkoutSchema>) => {
    console.log(values);
    // startTransition(async () => {
    //   try {
    //     const apiResult = await checkout.mutateAsync({
    //       price: TotalPrice,
    //       products: products,
    //       firstName: values.firstName,
    //       lastName: values.lastName,
    //       state: values.State,
    //       county: values.County,
    //       shippingAddress: values.shippingAddress,
    //       phoneNumber: values.phoneNumber,
    //     });
    //     //     // console.log(apiResult)
    //     //     // setFormError(apiResult);
    //     //     // setClientSecret(apiResult.message)
    //   } catch (err) {
    //     // console.log(err);
    //   }
    // });
  };

  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <div className="prods flex w-full flex-col gap-4 lg:w-[60%] lg:border-r lg:border-r-black lg:pr-2">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 lg:mr-4"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormField
                name="firstName"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="First Name"
                        className="rounded-full focus-visible:ring-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="lastName"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Last Name"
                        className="rounded-full focus-visible:ring-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>State</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? props.states.find(
                            (state) => state.id === field.value
                          )?.name
                        : "Select State"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent align="start"  className="drop-down w-[235px] p-0">
                  <Command>
                    <CommandInput placeholder="Search State..." />
                    <CommandEmpty>No State found.</CommandEmpty>
                    <CommandGroup className="max-h-[300px] scroll-auto overflow-y-auto">
                      {props.states.map((state) => (
                        <CommandItem
                          value={state.name}
                          key={state.id}
                          onSelect={() => {
                            form.setValue("state", state.id)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              state.id === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {state.name}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
            name="totalPrice"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Total Price</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                  />
                </FormControl>
                <FormDescription>Maximum amount on which shipping cost will apply.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="shippingCost"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Shipping Cost</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
            </div>
            <div className="w-full">
              <FormField
                name="phoneNumber"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Phone Number"
                        className="rounded-full focus-visible:ring-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="State"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    {/* <FormLabel>State</FormLabel> */}
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              "w-full justify-between rounded-full",
                              !field.value && "text-muted-foreground",
                            )}
                          >
                            {field.value
                              ? props.states.find(
                                  (state) => state.id === field.value,
                                )?.name
                              : "Select State"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent
                        align="start"
                        className="drop-down w-[235px] p-0"
                      >
                        <Command>
                          <CommandInput placeholder="Search State..." />
                          <CommandEmpty>No State found.</CommandEmpty>
                          <CommandGroup className="max-h-[300px] overflow-y-auto scroll-auto">
                            {props.states.map((state) => (
                              <CommandItem
                                value={state.name}
                                key={state.id}
                                onSelect={() => {
                                  form.setValue("State", state.id);
                                  // setselectedState(state.id)
                                  filterCountiesBasedOnState(state.id);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    state.id === field.value
                                      ? "opacity-100"
                                      : "opacity-0",
                                  )}
                                />
                                {state.name}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="County"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    {/* <FormLabel>State</FormLabel> */}
                    <Popover>
                      <PopoverTrigger
                        asChild
                        disabled={
                          typeof selectedState === "string" ? false : true
                        }
                      >
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              "w-full justify-between rounded-full",
                              !field.value && "text-muted-foreground",
                            )}
                          >
                            {field.value
                              ? filteredCounties.find(
                                  (county) => county.id === field.value,
                                )?.name === undefined
                                ? "Select County"
                                : filteredCounties.find(
                                    (county) => county.id === field.value,
                                  )?.name
                              : "Select County"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent
                        align="start"
                        className="drop-down w-[235px] p-0"
                      >
                        <Command>
                          <CommandInput placeholder="Search County..." />
                          <CommandEmpty>No County found.</CommandEmpty>
                          <CommandGroup className="max-h-[300px] overflow-y-auto scroll-auto">
                            {filteredCounties.map((county) => (
                              <CommandItem
                                value={county.name}
                                key={county.id}
                                onSelect={() => {
                                  form.setValue("County", county.id);
                                  console.log(
                                    "Sub Total",
                                    subTotal,
                                    "Order Price",
                                    county.orderPrice,
                                  );
                                  setShipping(
                                    parseFloat(county.orderPrice) <=
                                      parseFloat(subTotal)
                                      ? "Free"
                                      : county.shippingCost.toString(),
                                  );
                                  setTotalPrice(
                                    parseFloat(county.orderPrice) <=
                                      parseFloat(subTotal)
                                      ? subTotal
                                      : parseFloat(subTotal) +
                                          parseFloat(county.shippingCost),
                                  );
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    county.id === field.value
                                      ? "opacity-100"
                                      : "opacity-0",
                                  )}
                                />
                                {county.name}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full">
              <FormField
                name="shippingAddress"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Address"
                        className="rounded-full focus-visible:ring-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {formError.error === "error" && (
              <div className="flex items-center gap-x-2 rounded-md bg-destructive/15 p-3 text-sm text-destructive">
                <Icons.alertTriangle className="h-4 w-4" />
                <p className="">{formError.message}</p>
              </div>
            )}
            {formError.error === "success" && (
              <div className="flex items-center gap-x-2 rounded-md bg-emerald-500/15 p-3 text-sm text-emerald-500">
                <Icons.Check className="h-4 w-4" />
                <p className="">{formError?.message}</p>
              </div>
            )}
            <div className="flex items-center justify-between">
              <LinkButton
                href="/cart"
                className="rounded-full bg-transparent text-primary hover:bg-transparent"
              >
                {"<"} Go back to Cart
              </LinkButton>

              {/* <Button type="submit" disabled={isPending} className="rounded-full min-w-[150px]">
          CHECKOUT SECURELY
        </Button> */}
        {
          form.getValues("firstName") && form.getValues("lastName") &&form.getValues("phoneNumber") && form.getValues("State") && form.getValues("County") && form.getValues("shippingAddress") &&

              // <StripeCheckout
              //   name="Kratom"
              //   image="/assets/images/favicon.png"
              //   shippingAddress
              //   description={`Your Total is $: ${TotalPrice}`}
              //   amount={TotalPrice * 100}
              //   token={onToken}
              //   currency="usd"
              //   stripeKey={
              //     "pk_test_51OgZHyBHp2gkWuO32rpnRGLdbO7seYTm9pXePQKvniRrv2w9t4A17BZbf3lqs27jM377xml5Jmkbuw1wIV3FplHd00ENP1ARYx"
              //   }
              // >
                <Button
                  type="submit"
                  disabled={isPending}
                  className="min-w-[150px] rounded-full"
                >
                  CHECKOUT SECURELY
                </Button>
              // </StripeCheckout>
        }
            </div>
          </form>
        </Form>
      </div>
      <div className="w-full lg:w-[40%]">
        {products ? (
          <div className="products">
            {products.map((prod) => (
              <div className="flex  items-center gap-2  p-2" key={prod.id}>
                <div className="img flex h-[100px] w-[100px] items-center justify-center rounded-md bg-grey">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="img h-[80px] w-[80px]  object-contain"
                  />
                </div>
                <div className="content w-full">
                  <div className="just flex  flex-col">
                    <h3 className="mb-3 text-[14px] font-bold text-black md:text-[16px] xl:text-[18px] 2xl:text-[22px]">
                      {prod.name}
                    </h3>
                    <h3 className="text-[14px] font-bold text-primary md:text-[16px] xl:text-[18px]">
                      $
                      {parseFloat(prod.variant.price) * parseInt(prod.quantity)}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          "No Product Found. Please Add Product to Cart"
        )}

        <div className="subtotals mt-4 border-y-2 border-y-black pt-4">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h3 className="text-[16px] lg:text-[18px]">Subtotal</h3>
            <h3 className="text-[16px] lg:text-[18px]">${subTotal}</h3>
          </div>
          <div className="mb-4 flex items-center justify-between gap-4 ">
            <h3 className="text-[16px] lg:text-[18px]">Shipping</h3>
            <h3 className="text-[16px] lg:text-[18px]">
              {shipping === "0"
                ? "Depends on Location"
                : shipping != "Free"
                  ? `$${shipping}`
                  : "Free"}
            </h3>
          </div>
        </div>
        <div className="mb-4 flex items-center justify-between gap-4 py-4">
          <h3 className="text-[16px] font-bold lg:text-[18px]">Total</h3>
          <h3 className="text-[16px] font-bold lg:text-[18px]">
            ${TotalPrice}
          </h3>
        </div>
        {/* <Button className="w-full rounded-full">CHECKOUT</Button> */}
      </div>
    </div>
  );
};

export default Checkout;
