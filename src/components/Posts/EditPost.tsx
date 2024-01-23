"use client";
import React, { useEffect, useState, useTransition } from "react";
import { Card, CardContent } from "../ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
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
import { blogPostSchema } from "@/schemas/blogPostSchema";
import { ProductCategoryType } from "@/types/categories";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { TagSelectType } from "@/types/tags";
import { splitTags } from "@/lib/utils";
import { Editor } from "novel";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { PrismaPostType } from "@/types/posts";

type Props = {
  categories: ProductCategoryType[];
  data: any;
};

const EditPost = (props: Props) => {
  var quillObj: any;
  const { categories, data } = props;
  // const [postTags, setPostTags] = useState<TagSelectType>();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [formError, setFormError] = useState<apiReplyType>({
    error: "",
    message: "",
  });

  const form = useForm<z.infer<typeof blogPostSchema>>({
    resolver: zodResolver(blogPostSchema),
    defaultValues: {
      title: data.title,
      slug: data.slug,
      summary: data.summary,
      metaTitle: data.metaTitle,
      metaDescription: data.metaDescription,
      discount: data.discount,
      tags: data.tags.toString(),
      category: data.categoryId,
    },
  });

  const [tags, setTags] = React.useState<TagSelectType[]>([]);

  const { setValue } = form;
  const [contentValue, setContentValue] = useState("");

  useEffect(() => {
    setContentValue(data.content);
  }, []);

  const post = api.post.editPost.useMutation();
  const onSubmit = async (values: z.infer<typeof blogPostSchema>) => {
    const tagsArray = splitTags(values.tags);
    startTransition(async () => {
      try {
        const apiResult = await post.mutateAsync(
          {
            id: data.id,
            title: values.title,
            slug: values.slug,
            summary: values.summary,
            // content: values.content,
            content: contentValue,
            category: values.category,
            tags: tagsArray,
            discount: values.discount,
            metaTitle: values.metaTitle,
            metaDescription: values.metaDescription,
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
    <Card className="m-4 shadow-md">
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                name="title"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
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
                name="summary"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Short Summary</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <FormField
                name="content"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
              <div className="mt-4">
                <FormLabel className="">Content</FormLabel>
              </div>
              <ReactQuill
                theme="snow"
                value={contentValue}
                onChange={setContentValue}
                modules={{
                  toolbar: {
                    container: [
                      [{ header: [1, 2, 3, 4, 5, 6, false] }],
                      ["bold", "italic", "underline"],
                      [{ list: "ordered" }, { list: "bullet" }],
                      [{ align: [] }],
                      ["link", "image"],
                      ["clean"],
                      [{ color: [] }],
                    ],
                  },
                }}
                className=" rounded-md border !mt-2"
              />

              <FormField
                name="category"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      {/* <Textarea
                  {...field}
                /> */}
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((cat, index) => (
                            <SelectItem key={index} value={cat.id}>
                              {cat.category_name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="tags"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tags</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isPending} />
                    </FormControl>
                    <FormDescription>
                      Sperate Tags by using comma ( , )
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="discount"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Discount</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" disabled={isPending} />
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
                      <Input {...field} disabled={isPending} />
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
            <Button type="submit" disabled={isPending} className="bg-primary">
              Create Blog Category
            </Button>
          </form>
        </Form>
        {/* <div className="" dangerouslySetInnerHTML={{ __html: contentValue }}></div> */}
      </CardContent>
    </Card>
  );
};

export default EditPost;
