import ProductsDataTable from "@/components/Products/ProductsDataTable";
import LinkButton from "@/components/customUI/LinkButton";
import { db } from "@/server/db";
import { productsType } from "@/types/products";
import React from "react";

const ProductsPage = async () => {
  const products: any = await db.products.findMany({
    // include:{
    //   category:true,
    // }
  })
  // console.log(products);
  return (
    <div className="w-full">
      <div className="header mb-4 flex items-center justify-between rounded-md p-4">
        <h3 className="text-2xl font-bold">Products</h3>
        <LinkButton href="/dashboard/products/addnew">New Product</LinkButton>
      </div>
      <div className="m-4 rounded-md border  bg-white p-4">
        <ProductsDataTable  data={products} />
      </div>
    </div>
  );
};

export default ProductsPage;
