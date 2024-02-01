import FeaturedProducts from "@/components/FeaturedProducts";
import SingleProductComp from "@/components/SingleProductComp";
import { db } from "@/server/db";
import Link from "next/link";
import React from "react";

const SingleProducts = async ({
  params,
}: {
  params: { category: string; product: string };
}) => {
  const { category, product } = params;
  const relatedProducts = await db.products.findMany({
    include: {
      category: true,
    },
    where: {
      category: {
        slug: category,
      },
    },
    orderBy: {
      createdAt: "desc", // 'desc' for descending order (latest first), 'asc' for ascending order
    },
    take: 4,
  });
  const singleProduct = await db.products.findFirst({
    where: {
      slug: product,
    },
    include: {
      category: true,
    },
  });
  return (
    <div>
      {/* Breadcrum */}
      <div className="width px-4 py-4 3xl:px-0">
        <div className="my-4 flex flex-wrap w-fit items-center gap-3 rounded-lg bg-grey px-4 py-2 xl:my-6">
          <Link href={"/"}>
            <p className="font-dmSans text-[16px] text-black xl:text-[20px]">
              Home
            </p>
          </Link>
          {" > "}
          <Link href={`/shop/${category}`}>
            <p className="font-dmSans text-[16px] text-black xl:text-[20px]">
              {singleProduct?.category.category_name}
            </p>
          </Link>
          {" > "}
          <p className="font-dmSans text-[16px] text-black xl:text-[20px]">
            {singleProduct?.name}
          </p>
        </div>
      </div>

      {/* Single Product */}
      <SingleProductComp data={singleProduct} />


      <FeaturedProducts
        data={relatedProducts}
        link={`/shop/${category}`}
        title="Related Products"
      />
    </div>
  );
};

export default SingleProducts;
