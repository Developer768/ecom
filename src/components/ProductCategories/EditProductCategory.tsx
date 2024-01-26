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

const EditProductCategory = ({ data }: { data: ProductCategoryType }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [formError, setFormError] = useState<apiReplyType>({
    error: "",
    message: "",
  });

  const form = useForm<z.infer<typeof categorySchema>>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      categoryName: data.category_name,
      slug: data.slug,
      desc: data.description,
      metaTitle: data.metaTitle,
      metaDescription: data.metaDescription
    },
  });
  const editCategory = api.category.editCategory.useMutation();
  const onSubmit = async (values: z.infer<typeof categorySchema>) => {
    startTransition(async () => {
      try {
        // console.log(values)
        const apiResult = await editCategory.mutateAsync(
          {
            id: data.id,
            categoryName: values.categoryName,
            slug: values.slug,
            desc: values.desc,
            metaTitle: values.metaTitle,
            metaDescription: values.metaDescription
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
                name="categoryName"
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
                name="slug"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Slug</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isPending} />
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
                      <Textarea {...field} />
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
              Update Category
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default EditProductCategory;
