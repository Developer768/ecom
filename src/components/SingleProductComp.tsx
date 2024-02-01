"use client";
import { Icons } from "@/lib/Icons";
import React, { useEffect, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { findMaxPrice, findMinPrice } from "@/lib/utils";
import { Button } from "./ui/button";

type Props = {
  data: any;
};
const SingleProductComp = (props: Props) => {
  const { data } = props;
  const [stars, setStars] = useState<number>(0);
  const [price, setPrice] = useState();
  useEffect(() => {
      const str = (Math.random() * (5 - 4) + 4).toFixed(1);
      setStars(str);
      const minPrice = findMinPrice(data.combination)
      const maxPrice = findMaxPrice(data.combination)
      const initialPrice = minPrice + " - $" + maxPrice
      console.log(typeof initialPrice)
      setPrice(initialPrice)
  }, []);
  const [productImage, setProductImage] = useState<string>(data.images[0]);
  return (
    <div className="width px-4 py-4 3xl:px-0">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="image-slider">
          <div className="img mb-4 flex aspect-video w-full items-center justify-center rounded-[21px] bg-grey p-4">
            <img
              src={productImage}
              alt={data.name}
              className="object-contain"
            />
          </div>
          <div className="images flex flex-wrap items-center  gap-6">
            {data.images.map((img, index) => (
              <div
                key={index}
                className={`flex h-[100px] w-[100px] cursor-pointer items-center justify-center rounded-md bg-grey p-1 hover:border hover:border-primary ${
                  productImage === img && "border border-primary"
                }`}
                onClick={() => setProductImage(img)}
              >
                <img
                  src={img}
                  alt={data.name}
                  className="h-[90px] w-[90px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="product-details">
          <h3 className="mb-2 font-dmSans text-[22px] font-bold leading-tight text-black lg:text-[30px] xl:mb-3 xl:text-[38px] 3xl:text-[50px]">
            {data.name}
          </h3>
          <h3 className="mb-1 font-dmSans text-[18px] font-medium leading-tight text-primary lg:text-[24px] xl:mb-3 xl:text-[30px] 3xl:text-[40px]">
            ${price}
          </h3>
          <div className="stars mb-2 flex items-center gap-1 xl:mb-3">
            <Icons.Star className="w-[16px] border-golden fill-golden stroke-golden lg:w-[18px] xl:w-[20px] 3xl:w-[22px]" />
            <Icons.Star className="w-[16px] border-golden fill-golden stroke-golden lg:w-[18px] xl:w-[20px] 3xl:w-[22px]" />
            <Icons.Star className="w-[16px] border-golden fill-golden stroke-golden lg:w-[18px] xl:w-[20px] 3xl:w-[22px]" />
            <Icons.Star className="w-[16px] border-golden fill-golden stroke-golden lg:w-[18px] xl:w-[20px] 3xl:w-[22px]" />
            <Icons.StarHalf className="w-[16px] border-golden fill-golden stroke-golden lg:w-[18px] xl:w-[20px] 3xl:w-[22px]" />
            <p className="ml-4 text-[16px]  text-golden lg:text-[18px] xl:text-[20px] 3xl:text-[22px]">
              {stars} Ratings
            </p>
          </div>
          <div className="desc border-y border-y-[#8F8F8F] py-3 xl:py-6">
            <p className=" font-dmSans text-[16px] xl:text-[20px]">
              {data.desc}
            </p>
          </div>
          <div className="add-to-cart border-t border-t-[#8F8F8F] py-3 xl:py-6">
            <div className="flex flex-wrap gap-4">
                <Button variant={"outline"} className="rounded-full w-full sm:w-[35%] font-bold 2xl:text-[20px] 2xl:p-6">Quatity</Button>
                <Button className="rounded-full w-full sm:w-[60%] font-bold 2xl:text-[20px] 2xl:p-6">ADD TO CART</Button>
            </div>
            <div className="flex items-center justify-end">
                <img src="/assets/images/visa.png" alt="Visa" />
            </div>
          </div>
        <div className="details">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="border-b-black border-b-2">
              <AccordionTrigger className="font-dmSans font-bold text-[16px] lg:text-[18px] 2xl:text-[25px] no-underline hover:no-underline">PRODUCT DETAILS</AccordionTrigger>
              <AccordionContent>
                <div className="detail font-dmSans text-[16px] xl:text-[18px]" dangerouslySetInnerHTML={{ __html: data.details }}></div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        </div>

      </div>
    </div>
  );
};

export default SingleProductComp;
