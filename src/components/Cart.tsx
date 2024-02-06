"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import {
  removeProduct,
  increaseProductPrice,
  decreaseProductPrice,
} from "@/features/cart/cartSlice";
import { Icons } from "@/lib/Icons";
import LinkButton from "./customUI/LinkButton";

const Cart = () => {
  let subTotal = useSelector((state) => state.cartReducer.total);
  const products = useSelector((state) => state.cartReducer.products);

  const [shipping, setShipping] = useState(0);
  const [TotalPrice, setTotalPrice] = useState(subTotal);

  useEffect(()=>{
    setTotalPrice(subTotal)
  },[subTotal])

  const dispatch = useDispatch();

  //   const increasePrice = async(id) => {
  //  dispatch(increasePrice(prod.tempID))
  //     // const updatedQuantity = parseInt(quantity) + 1;
  //     // setQuantity(updatedQuantity.toString());
  //   };
  const decreasePrice = (id, size) => {
    if (parseFloat(size) > 1) {
      console.log(id, size);
      dispatch(decreaseProductPrice(id));
    }
  };
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="prods flex flex-col gap-4 w-full lg:w-[70%] lg:border-r lg:border-r-black lg:pr-2">
        {products ? (
          <div className="products">
            {products.map((prod) => (
              <div className="flex  items-center gap-2  p-2" key={prod.id}>
                <div className="img flex h-[150px] w-[150px] items-center justify-center rounded-md bg-grey">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="img h-[120px] w-[120px]  object-contain"
                  />
                </div>
                <div className="content w-full">
                  <div className="flex flex-col  lg:flex-row lg:justify-between">
                    <h3 className="text-[14px] font-bold text-black md:text-[16px] xl:text-[18px] 2xl:text-[22px] mb-3">
                      {prod.name}
                    </h3>
                    <h3 className="text-[14px] font-bold text-primary md:text-[16px] xl:text-[18px]">
                      $
                      {parseFloat(prod.variant.price) * parseInt(prod.quantity)}
                    </h3>
                  </div>
                  <div className="quanity">
                    <div
                      className={
                        "flex  h-[40px] w-[150px] items-center justify-between rounded-full border border-[#707070] p-1 text-[16px] font-bold "
                      }
                    >
                      <Button
                        variant={"ghost"}
                        className="rounded-full bg-transparent p-0 px-2 text-[16px]"
                        onClick={() => {
                          if (parseFloat(prod.quantity) > 1) {
                            dispatch(decreaseProductPrice(prod.tempID));
                          }
                        }}
                      >
                        <Icons.Minus className="" />
                      </Button>
                      {prod.quantity}
                      <Button
                        variant={"ghost"}
                        className="rounded-full bg-transparent p-0 px-2 text-[16px]"
                        onClick={() =>
                          dispatch(increaseProductPrice(prod.tempID))
                        }
                        // onClick={() => increasePrice(prod.tempID)}
                      >
                        <Icons.Plus className="" />
                      </Button>
                    </div>
                  </div>
                  <Button
                    variant={"ghost"}
                    className="focus-visible::p-0 p-0 hover:bg-transparent hover:p-0"
                    onClick={() => dispatch(removeProduct(prod.tempID))}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          "No Product Found. Please Add Product to Cart"
        )}
      </div>
      <div className="w-full lg:w-[30%] lg:mt-6">
        <div className="subtotals border-b-2 border-b-black">
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
        <LinkButton  href="/checkout" className="w-full rounded-full">CHECKOUT</LinkButton>
      </div>
    </div>
  );
};

export default Cart;
