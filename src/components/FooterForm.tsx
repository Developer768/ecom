"use client";
import React, { useState, useTransition } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { apiReplyType } from "@/types/index";
import { footerFormSchema } from "@/schemas/footerFormSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Icons } from "@/lib/Icons";
import { Button } from "./ui/button";
import { api } from "@/trpc/react";

const FooterForm = () => {
  const [isPending, startTransition] = useTransition();
  const [formError, setFormError] = useState<apiReplyType>({
    error: "",
    message: "",
  });

  const form = useForm<z.infer<typeof footerFormSchema>>({
    resolver: zodResolver(footerFormSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const contactMail = api.mail.contact.useMutation();
  const onSubmit = async (values: z.infer<typeof footerFormSchema>) => {
    // console.log(values);
    startTransition(async () => {
      try {
        console.log(values);
        const apiResult = await contactMail.mutateAsync(
          {
            name: values.name,
            email: values.email,
            type:values.type,
          },
          // {
          //   onSuccess: () => {
          //     router.refresh();
          //   },
          // },
        );
        console.log(apiResult);
        setFormError(apiResult);
        // console.log(values);
      } catch (err) {
        console.log(err);
      }
    });
  };
  return (
    <div className="py-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className="grid grid-cols-2 gap-3">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Name"
                      className="rounded-full border-transparent bg-accordionBg placeholder:text-[#9F9F9F] focus-visible:border-transparent focus-visible:ring-primary"
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
                      placeholder="Email"
                      className="rounded-full border-transparent bg-accordionBg placeholder:text-[#9F9F9F] focus-visible:border-transparent focus-visible:ring-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="my-4 grid grid-cols-2 gap-3">
            <div className="flex items-center">
              <FormField
                name="type"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        disabled={isPending}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="accept" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            I accept terms & conditions
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

      
            <Button
              type="submit"
              disabled={isPending}
              className="ml-auto w-fit rounded-full bg-primary"
            >
              Subscribe
            </Button>
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
        </form>
      </Form>
    </div>
  );
};

export default FooterForm;
