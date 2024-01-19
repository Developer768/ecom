import ProductCategoriesDataTable from "@/components/ProductCategories/ProductCategoriesDataTable";
import LinkButton from "@/components/customUI/LinkButton";
import { db } from "@/server/db";
import { ProductCategoryType } from "@/types/categories";
import React from "react";

const ProductCategories = async() => {
  const productsCategories: ProductCategoryType[]  = await db.productCategory.findMany({
    select:{
      id: true,
      category_name: true,
      slug: true,
      description: true,
      metaTitle: true,
      metaDescription: true
    }
  })
  return (
    <div className="">
      <div className="header mb-4 flex items-center justify-between rounded-md p-4">
        <h3 className="text-2xl font-bold">Product Categories</h3>
        <LinkButton href="/dashboard/categories/product/addnew">
          New Category
        </LinkButton>
      </div>
      <div className="m-4 rounded-md border  bg-white p-4">
        <ProductCategoriesDataTable data={productsCategories} />
      </div>
    </div>
  );
};

export default ProductCategories;
