"use client"
import React, { useState, useTransition } from "react";
import {
  Card,
  CardContent,
} from "../ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { SignupSchema } from "@/schemas/signupSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { api } from "@/trpc/react";
import { apiReplyType } from "@/types/index";
import { Icons } from "@/lib/Icons";
import Image from "next/image";
import { UserType } from "@/types/users";
import UploadUserAvatar from "./UploadUserAvatar";
import { useRouter } from "next/navigation";


const EditUser = ({data}:{data:UserType}) => {
  const router = useRouter()
    const [isPending, startTransition] = useTransition();
    const [formError,setFormError] = useState<apiReplyType>({
      error: "",
      message: "",
    })

    const form = useForm<z.infer<typeof SignupSchema>>({
      resolver: zodResolver(SignupSchema),
      defaultValues: {
        name:data.name,
        email: data.email,
        password: "",
      },
    });

    const editUser = api.user.editUser.useMutation();
    const onSubmit = async (values: z.infer<typeof SignupSchema>) => {
        startTransition(async () => {
          try {
            const apiResult = await editUser.mutateAsync({
              id: data.id,
              name: values.name,
              email: values.email,
              password: values.password
            },{onSuccess: () => {
              router.refresh();
            },});
            console.log(apiResult)
            setFormError(apiResult)
          } catch (err) {
            console.log(err);
          }
        });
      };
  return (
    <Card className=" shadow-md mt-4">
      <CardContent className="p-6 ">
        <div className="image mb-6 ">
        <UploadUserAvatar id={data.id} avatar={data.avatar} />
        </div>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="Fahad"
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    type="email"
                    placeholder="example@gmail.com"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    type="password"
                    placeholder="******"
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
          Update User
        </Button>
      </form>
    </Form>
      </CardContent>
    </Card>
  )
}

export default EditUser