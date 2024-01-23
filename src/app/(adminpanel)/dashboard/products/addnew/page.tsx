import AddNewProduct from "@/components/Products/AddNewProduct";
import { db } from "@/server/db";
import { ProductCategoryType } from "@/types/categories";
import React from "react";

const AddNewProductPage = async() => {
  const categories:ProductCategoryType[] = await db.blogCategory.findMany()
  return (
    <div className="">
      <div className="borde rounded-md  p-4">
        <h3 className="text-2xl font-bold">Add New Product</h3>
      </div>
      <AddNewProduct categories={categories} />
    </div>
  );
};

export default AddNewProductPage;
