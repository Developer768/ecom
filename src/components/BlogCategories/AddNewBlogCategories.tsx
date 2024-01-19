"use client"
import React, { useState, useTransition } from "react";
import {
  Card,
  CardContent,
} from "../ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { api } from "@/trpc/react";
import { apiReplyType } from "@/types/index";
import { Icons } from "@/lib/Icons";
import { useRouter } from "next/navigation";
import { Textarea } from "../ui/textarea";
import { blogCategorySchema } from "@/schemas/blogCategorySchema";

const AddNewBlogCategories = () => {
    const router = useRouter()
    const [isPending, startTransition] = useTransition();
    const [formError,setFormError] = useState<apiReplyType>({
      error: "",
      message: "",
    })

    const form = useForm<z.infer<typeof blogCategorySchema>>({
      resolver: zodResolver(blogCategorySchema),
      defaultValues: {
        categoryName: "",
        slug: "",
        desc:"",
        metaTitle: "",
        metaDescription: ""
      },
    });

    const category = api.blogCategory.addNewCategory.useMutation();
    const onSubmit = async (values: z.infer<typeof blogCategorySchema>) => {
        startTransition(async () => {
          try {
            const apiResult = await category.mutateAsync(values,{onSuccess: () => {
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
    <Card className="shadow-md m-4">
      <CardContent className="p-6">
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <FormField
            name="categoryName"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category Name</FormLabel>
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
            name="slug"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Slug</FormLabel>
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
            name="desc"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                  {...field}
                />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="metaTitle"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Meta Title</FormLabel>
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
            name="metaDescription"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Meta Description</FormLabel>
                <FormControl>
                  <Textarea
                  {...field}
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
          Create Blog Category
        </Button>
      </form>
    </Form>
      </CardContent>
    </Card>
  )
}

export default AddNewBlogCategories