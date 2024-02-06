"use client";
import { CountiesType, StatesType } from "@/types/shipping";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";

type Props = {
  states: StatesType[];
  counties: CountiesType[];
};

const Checkout = (props: Props) => {
  let subTotal = useSelector((state) => state.cartReducer.total);
  const products = useSelector((state) => state.cartReducer.products);

  const [shipping, setShipping] = useState(0);
  const [TotalPrice, setTotalPrice] = useState(subTotal);

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <div className="prods flex w-full flex-col gap-4 lg:w-[60%] lg:border-r lg:border-r-black lg:pr-2">
        Form
      </div>
      <div className="w-full lg:w-[40%]">
        {products ? (
          <div className="products">
            {products.map((prod) => (
              <div className="flex  items-center gap-2  p-2" key={prod.id}>
                <div className="img flex h-[100px] w-[100px] items-center justify-center rounded-md bg-grey">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="img h-[80px] w-[80px]  object-contain"
                  />
                </div>
                <div className="content w-full">
                  <div className="just flex  flex-col">
                    <h3 className="mb-3 text-[14px] font-bold text-black md:text-[16px] xl:text-[18px] 2xl:text-[22px]">
                      {prod.name}
                    </h3>
                    <h3 className="text-[14px] font-bold text-primary md:text-[16px] xl:text-[18px]">
                      $
                      {parseFloat(prod.variant.price) * parseInt(prod.quantity)}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          "No Product Found. Please Add Product to Cart"
        )}

        <div className="subtotals border-y-2 border-y-black pt-4 mt-4">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h3 className="text-[16px] lg:text-[18px]">Subtotal</h3>
            <h3 className="text-[16px] lg:text-[18px]">${subTotal}</h3>
          </div>
          <div className="mb-4 flex items-center justify-between gap-4 ">
            <h3 className="text-[16px] lg:text-[18px]">Shipping</h3>
            <h3 className="text-[16px] lg:text-[18px]">
              {shipping === 0 ? "Depends on Location" : `$${shipping}`}
            </h3>
          </div>
        </div>
        <div className="mb-4 flex items-center justify-between gap-4 py-4">
          <h3 className="text-[16px] font-bold lg:text-[18px]">Total</h3>
          <h3 className="text-[16px] font-bold lg:text-[18px]">
            ${TotalPrice}
          </h3>
        </div>
        <Button className="w-full rounded-full">
          CHECKOUT
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
