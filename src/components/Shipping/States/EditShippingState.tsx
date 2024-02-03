"use client"
import { StatesType } from '@/types/shipping'
import React, { useState, useTransition } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { api } from "@/trpc/react";
import { apiReplyType } from "@/types/index";
import { Icons } from "@/lib/Icons";
import { useRouter } from "next/navigation";
import { shippingStateSchema } from '@/schemas/shippingStateSchema';
import { Card, CardContent } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';



const EditShippingState = ({ data }: { data: StatesType }) => {
    const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [formError, setFormError] = useState<apiReplyType>({
    error: "",
    message: "",
  });

  const form = useForm<z.infer<typeof shippingStateSchema>>({
    resolver: zodResolver(shippingStateSchema),
    defaultValues: {
      name:data.name
    },
  });
  const editCategory = api.states.editshippingState.useMutation();
  const onSubmit = async (values: z.infer<typeof shippingStateSchema>) => {
    startTransition(async () => {
      try {
        // console.log(values)
        const apiResult = await editCategory.mutateAsync(
          {
            id: data.id,
            name: values.name
          },
          {
            onSuccess: () => {
              router.refresh();
            },
          },
        );
        // console.log(apiResult);
        setFormError(apiResult);
      } catch (err) {
        // console.log(err);
      }
    });
  };
  return (
    <Card className="shadow-md mt-4">
      <CardContent className="p-6 ">
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
                      <Input {...field} disabled={isPending} />
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
            <Button type="submit" disabled={isPending} className="">
              Update Shipping State
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default EditShippingState