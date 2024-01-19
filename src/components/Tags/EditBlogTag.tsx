"use client";
import React, { useState, useTransition } from "react";
import { Card, CardContent } from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
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
import { useRouter } from "next/navigation";
import { categorySchema } from "@/schemas/categorySchema";
import { Textarea } from "../ui/textarea";
import { ProductCategoryType } from "@/types/categories";
import { TagsSchema } from "@/schemas/tagsSchema";
import { TagsType } from "@/types/tags";

const EditBlogTag = ({ data }: { data: TagsType }) => {
    const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [formError, setFormError] = useState<apiReplyType>({
    error: "",
    message: "",
  });

  const form = useForm<z.infer<typeof TagsSchema>>({
    resolver: zodResolver(TagsSchema),
    defaultValues: {
      name: data.name,
      description: data.desc,
    },
  });
  const edittag = api.tag.editTag.useMutation();
  const onSubmit = async (values: z.infer<typeof TagsSchema>) => {
    startTransition(async () => {
      try {
        console.log(values)
        const apiResult = await edittag.mutateAsync(
          {
            id: data.id,
            name: values.name,
            description: values.description
          },
          {
            onSuccess: () => {
              router.refresh();
            },
          },
        );
        console.log(apiResult);
        setFormError(apiResult);
      } catch (err) {
        console.log(err);
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
                    <FormLabel>Category Name</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isPending} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="description"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
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
              Update Tag
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default EditBlogTag