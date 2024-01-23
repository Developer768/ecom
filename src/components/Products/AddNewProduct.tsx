"use client";
import React, { useState, useTransition } from "react";
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
import { productSchema } from "@/schemas/productSchema";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { splitTags } from "@/lib/utils";
import { TagSelectType } from "@/types/tags";
import { ProductCategoryType } from "@/types/categories";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type Props = {
  categories: ProductCategoryType[];
  // tags: TagSelectType[];
};

const AddNewProduct = (props: Props) => {
  var quillObj: any;
  const { categories } = props;
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [formError, setFormError] = useState<apiReplyType>({
    error: "",
    message: "",
  });

  const [combinations, setCombinations] = useState();
  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      slug: "",
      metaTitle: "",
      metaDescription: "",
      discount: "0",
      tags: "",
      desc: "",
      variants: [
        {
          name: "",
          variations: "",
        },
      ],
      combination: [],
    },
  });

  const [tags, setTags] = React.useState<TagSelectType[]>([]);

  const { setValue } = form;

  const [contentValue, setContentValue] = useState("");
  const product = api.product.addNewProduct.useMutation();
  const onSubmit = async (values: z.infer<typeof productSchema>) => {
    console.log(values)
    const tagsArray = splitTags(values.tags);
    startTransition(async () => {
      try {
        console.log(values,combinations);
        const apiResult = await product.mutateAsync(
          {
            name: values.name,
            slug: values.slug,
            details: contentValue,
            category: values.category,
            tags: values.tags,
            discount: values.discount,
            metaTitle: values.metaTitle,
            metaDescription: values.metaDescription,
            desc: values.desc,
            variants: values.variants,
            combination: values.combination
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

  const addNewVariant = () => {
    form.setValue("variants", [
      ...form.getValues("variants"),
      {
        name: "",
        variations: "",
      },
    ]);
  };

  const removeVariant = (variant) => {
    // console.log(form.getValues("variants").filter((i) => i !== variant))
    form.setValue(
      "variants",
      form.getValues("variants").filter((i) => i !== variant),
    );
  };

  const generateCombination = () => {
    function generateVariationCombinations(
      variants,
      currentIndex = 0,
      currentCombination = [],
      result = [],
    ) {
      if (currentIndex === variants.length) {
        result.push(currentCombination.join(", "));
        return;
      }

      const currentVariant = variants[currentIndex];
      const variations = currentVariant.variations.split(",");

      for (const variation of variations) {
        const updatedCombination = [
          ...currentCombination,
          `${currentVariant.name}: ${variation.trim()}`,
        ];
        generateVariationCombinations(
          variants,
          currentIndex + 1,
          updatedCombination,
          result,
        );
      }

      return result;
    }

    const variations = generateVariationCombinations(
      form.getValues("variants"),
    );
    setCombinations(variations);
    console.log(variations);
  };

  return (
    <Card className=" m-4 shadow-md">
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Name</FormLabel>
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
                    <FormLabel>Short Description</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="mt-4">
                <FormLabel className="">Details</FormLabel>
              </div>
              <FormField
                name="details"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Details</FormLabel>
                    <FormControl>
                     <ReactQuill
                theme="snow"
                // value={contentValue}
                {...field}
                // onChange={setContentValue}
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
                className=" !mt-2 rounded-md border"
              />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <ReactQuill
                theme="snow"
                value={contentValue}
                {...field}
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
                className=" !mt-2 rounded-md border"
              /> */}
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
              <div className="variants">
                <FormLabel>Product Variants</FormLabel>
                <div className="mt-2">
                  {form.getValues("variants").map((variant, index) => (
                    // <div className=" flex items-center flex-wrap gap-4">
                    <div className="flex flex-wrap items-center  gap-x-4 border-b py-4" key={index}>
                      <FormField
                        name={`variants.${index}.name`}
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Variant Name</FormLabel>
                            <FormControl>
                              <Input {...field} className="min-w-[250px]" />
                            </FormControl>
                            <FormDescription>
                              Please write Variant Name
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        name={`variants.${index}.variations`}
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Values</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder=""
                                className="min-w-[250px]"
                              />
                            </FormControl>
                            <FormDescription>
                              Seperate Values by using comma ( , )
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        variant={"destructive"}
                        className="w-fit"
                        onClick={() => removeVariant(variant)}
                      >
                        X
                      </Button>
                    </div>
                  ))}

                  <Button className="mr-4 mt-4" onClick={() => addNewVariant()}>
                    Add New Variant
                  </Button>
                  <Button
                    className="mt-4"
                    onClick={() => generateCombination()}
                  >
                    Generate Variant Combinations
                  </Button>
                </div>
              </div>
            </div>
            {combinations && (
              <div className="combinations">
                <FormLabel>Product Variant combinations</FormLabel>
                {combinations.map((comb, index) => (
                  <div className="flex flex-wrap items-center gap-x-4" key={index}>
                    <FormField
                      name={`combination.${index}.name`}
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                          <Input  {...field} value={combinations[index]} className="w-[250px]" />
                          </FormControl>
                          <FormDescription></FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      name={`combination.${index}.price`}
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Price"
                              className="w-[250px]"
                            />
                          </FormControl>
                          <FormDescription></FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                ))}
              </div>
            )}
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
            <Button type="submit" disabled={isPending} className="" onClick={()=>console.log(form.getValues("combination"))}>
              Create Product
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AddNewProduct;
