"use client";
import React, { useState, useTransition } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { apiReplyType } from "@/types/index";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Icons } from "@/lib/Icons";
import { Button } from "./ui/button";
import { api } from "@/trpc/react";
import { contactFormSchema } from "@/schemas/contactFormSchema";
import { Textarea } from "./ui/textarea";

const ContactUsForm = () => {
  const [isPending, startTransition] = useTransition();
  const [formError, setFormError] = useState<apiReplyType>({
    error: "",
    message: "",
  });

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const contactMail = api.mail.contactUs.useMutation();
  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    // console.log(values);
    startTransition(async () => {
      try {
        const apiResult = await contactMail.mutateAsync(
          {
            firstname: values.firstname,
            lastname: values.lastname,
            email: values.email,
            phone: values.phone,
            message: values.message,
          },
        //   {
        //     onSuccess: () => {
        //       router.refresh();
        //     },
        //   },
        );
        // console.log(apiResult);
        setFormError(apiResult);
        console.log(values);
      } catch (err) {
        console.log(err);
      }
    });
  };
  return (
    <div className="pt-6 lg:pt-[38px] 3xl:pt-[60px]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <FormField
              name="firstname"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="First Name"
                      className="rounded-full border-white bg-transparent placeholder:text-[#9F9F9F] focus-visible:border-white focus-visible:ring-primary h-[58px] text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="lastname"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Last Name"
                      className="rounded-full border-white bg-transparent placeholder:text-[#9F9F9F] focus-visible:border-white focus-visible:ring-primary h-[58px] text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <FormField
              name="phone"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Phone"
                      className="rounded-full border-white bg-transparent placeholder:text-[#9F9F9F] focus-visible:border-white focus-visible:ring-primary h-[58px] text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      type="email"
                      placeholder="Email"
                      className="rounded-full border-white bg-transparent placeholder:text-[#9F9F9F] focus-visible:border-white focus-visible:ring-primary h-[58px] text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="">
          <FormField
              name="message"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                    {...field}
                    disabled={isPending}
                    placeholder="Message"
                    className="rounded-[21px] border-white bg-transparent placeholder:text-[#9F9F9F] focus-visible:border-white focus-visible:ring-primary min-h-[150px]  text-white"
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
          <Button
            type="submit"
            disabled={isPending}
            className="ml-auto mt-3 2xl:py-6 2xl:px-10 2xl:text-[22px] w-fit rounded-full bg-primary"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactUsForm;
