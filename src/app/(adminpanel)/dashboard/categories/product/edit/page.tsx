import EditProductCategory from "@/components/ProductCategories/EditProductCategory";
import { db } from "@/server/db";
import React from "react";

const EditProductCategoryPage = async ({
  searchParams,
}: {
  searchParams: any;
}) => {
  if (searchParams.categoryId.length != 24) {
    return (
      <div className="p-4">
        <div className="borde rounded-md  p-4">
          <h3 className="text-2xl font-bold">Edit Product Category</h3>
        </div>
        <div className="m-4 rounded-md border bg-white p-4">
          <p className="">Wrong Id.</p>
        </div>
      </div>
    );
  }

  const category = await db.productCategory.findUnique({
    where: {
      id: searchParams.categoryId,
    },
    select: {
      id: true,
      category_name: true,
      slug: true,
      description: true,
      metaTitle: true,
      metaDescription:true
    },
  });
  return (
    <div className="p-4">
      <div className="borde rounded-md  p-4">
        <h3 className="text-2xl font-bold">Edit Product Category</h3>
      </div>
      {category ? (
        <EditProductCategory data={category} />
      ) : (
        <div className="m-4 rounded-md border bg-white p-4">
          <p className="">No Category was found with given ID.</p>
        </div>
      )}
    </div>
  );
};

export default EditProductCategoryPage;
