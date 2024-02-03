"use client"
import React, { useState, useTransition } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { api } from "@/trpc/react";
import { apiReplyType } from "@/types/index";
import { Icons } from "@/lib/Icons";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { shippingStateSchema } from "@/schemas/shippingStateSchema";

const AddNewShippingState = () => {
    const router = useRouter()
    const [isPending, startTransition] = useTransition();
    const [formError,setFormError] = useState<apiReplyType>({
      error: "",
      message: "",
    })

    const form = useForm<z.infer<typeof shippingStateSchema>>({
      resolver: zodResolver(shippingStateSchema),
      defaultValues: {
        name: "",
      },
    });

    const state = api.states.addnew.useMutation();
    const onSubmit = async (values: z.infer<typeof shippingStateSchema>) => {
        startTransition(async () => {
          try {
            const apiResult = await state.mutateAsync(values,{onSuccess: () => {
              router.refresh();
            },});
            // console.log(apiResult)
            setFormError(apiResult)
          } catch (err) {
            // console.log(err);
          }
        });
      };
  return (
    <Card className="shadow-md m-4">
      <CardContent className="p-6">
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>State Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {
          formError.error === "error" && (
            <div className="bg-destructive/15 text-destructive p-3 rounded-md flex items-center gap-x-2 text-sm">
              <Icons.alertTriangle className="h-4 w-4" />
              <p className="">{formError.message}</p>
            </div>
          )
        }
        {
          formError.error === "success" && (
            <div className="bg-emerald-500/15 text-emerald-500 p-3 rounded-md flex items-center gap-x-2 text-sm">
              <Icons.Check className="h-4 w-4" />
              <p className="">{formError?.message}</p>
            </div>
          )
        }
        <Button type="submit" disabled={isPending} className="">
          Create State
        </Button>
      </form>
    </Form>
      </CardContent>
    </Card>
  )
}

export default AddNewShippingState