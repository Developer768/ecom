"use client";
import React from "react";
import LinkButton from "./customUI/LinkButton";
import Link from "next/link";
import { findMaxPrice, findMinPrice } from "@/lib/utils";

type Props = {
  data: any;
};

const ProductCatalog = (props: Props) => {
  const { data } = props;
  const minPrice = findMinPrice(data.combination)
  const maxPrice = findMaxPrice(data.combination)
  console.log(data);
  return (
    <div className="product-catalog bg-grey group mx-auto  flex w-full max-w-[430px] flex-col justify-between rounded-[21px] border-2 border-transparent p-5 text-black hover:border-primary lg:min-h-[490px] xl:min-h-[540px]">
      <div className="img mx-auto flex aspect-square max-w-[300px] items-center justify-center ">
        <img src={data.images[0]} alt={data.name} className="object-cover " />
      </div>
      <div className="mt-[30px] xl:mt-auto">
        <div className="fle justify-between">
          <div className="details w-[80%">
            <Link href={`/shop/${data.category.slug}/${data.slug}`}>
              <h3 className="font-dmSans text-[18px] font-bold text-black xl:text-[24px]">
                {data.name}
              </h3>
            </Link>
            <p className="text-textGrey font-dmSans text-[16px] font-medium">
              {data.category.category_name}
            </p>
          </div>
          <div className="price w-[20%">
            <h3 className="font-dmSans text-[18px] font-bold text-primary  xl:text-[24px]">
              ${minPrice} - ${maxPrice}
            </h3>
          </div>
        </div>
        <LinkButton
          href={`/shop/${data.category.slug}/${data.slug}`}
          className="mt-3 hidden w-full rounded-full group-hover:flex xl:p-6 xl:text-[18px] xl:font-bold"
        >
          See Product
        </LinkButton>
      </div>
    </div>
  );
};

export default ProductCatalog;
