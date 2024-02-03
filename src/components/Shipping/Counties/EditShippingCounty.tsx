"use client"
import { CountiesType, StatesType } from '@/types/shipping'
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
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { shippingCountySchema } from '@/schemas/shippingCountySchema';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';



const EditShippingCounty = ({ data,states }: { data: CountiesType,states: StatesType[]; }) => {
    const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [formError, setFormError] = useState<apiReplyType>({
    error: "",
    message: "",
  });

  const form = useForm<z.infer<typeof shippingCountySchema>>({
    resolver: zodResolver(shippingCountySchema),
    defaultValues: {
      name:data.name,
      shippingCost:data.shippingCost,
     totalPrice: data.orderPrice,
     state:data.StateId,
    },
  });
  const editCategory = api.counties.editshippingCounty.useMutation();
  const onSubmit = async (values: z.infer<typeof shippingCountySchema>) => {
    startTransition(async () => {
      try {
        // console.log(values)
        const apiResult = await editCategory.mutateAsync(
          {
            id: data.id,
            name: values.name,
            shippingCost: values.shippingCost,
            totalPrice: values.totalPrice,
            state: values.state,
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
                <FormLabel>County Name</FormLabel>
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
             <FormField
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
                        ? states.find(
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
                      {states.map((state) => (
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
          Update County
        </Button>
      </form>
    </Form>
      </CardContent>
    </Card>
  )
}

export default EditShippingCounty