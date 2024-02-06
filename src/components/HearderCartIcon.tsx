"use client";
import { Icons } from "@/lib/Icons";
import { useDispatch, useSelector } from "react-redux";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { removeProduct } from "@/features/cart/cartSlice";
import LinkButton from "./customUI/LinkButton";

const HearderCartIcon = () => {
  const productQuantity = useSelector((state) => state.cartReducer.quantity);
  const subTotal = useSelector((state) => state.cartReducer.total);
  const products = useSelector((state) => state.cartReducer.products);
  
  const dispatch = useDispatch()
  console.log(products)

  return (
    <Sheet>
      <SheetTrigger>
        <div className="cart-icon relative flex cursor-pointer items-center gap-1">
          <Icons.ShoppingBag className="h-[28px] w-[28px]" />
          <p className="absolute -right-4 -top-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary p-1 font-medium text-white">
            {productQuantity}
          </p>
        </div>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between rounded-tl-[36px] p-3 xl:p-6 2xl:min-w-[700px]">
        <SheetHeader>
          <SheetTitle className="text-left font-bold xl:text-[30px]">
            CART
          </SheetTitle>
          <SheetDescription className="border-y border-y-[#8F8F8F] py-2 xl:py-5">
            <div className="flex items-center gap-3 pb-2 xl:pb-4">
              <h3 className="flex items-center gap-4 text-[14px] font-bold text-black md:text-[16px] xl:text-[18px]">
                <span>
                  <Icons.Truck className="h-5 w-5 md:h-6 md:w-6 xl:h-8 xl:w-8" />
                </span>
                HURRAY! YOUR SHIPPING IS FREE FOR THIS ORDER.
              </h3>
            </div>
            <div className="progress"></div>
          </SheetDescription>
        </SheetHeader>
        {
            products &&
        <div className="products flex h-full flex-col gap-2 overflow-y-auto">
          {products.map((prod) => (
            <div className="flex  items-center gap-2  p-2" key={prod.id}>
              <div className="img h-[100px] w-[100px] rounded-md bg-grey">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="img h-[100px] w-[100px] object-contain"
                />
              </div>
              <div className="content w-full">
                <div className="flex flex-col lg:flex-row lg:justify-between">
                  <h3 className="text-[14px] font-bold text-black md:text-[16px] xl:text-[18px]">
                    {prod.name}
                  </h3>
                  <h3 className="text-[14px] font-bold text-primary md:text-[16px] xl:text-[18px]">
                    ${parseFloat(prod.variant.price) * parseInt(prod.quantity)}
                  </h3>
                </div>
                    <Button variant={"ghost"} className="p-0 focus-visible::p-0 hover:p-0 hover:bg-transparent" onClick={()=>dispatch(removeProduct(prod.tempID))}>Remove</Button>
              </div>
            </div>
          ))}
        </div>
        }

        <div className="flex flex-col border-t border-t-[#8F8F8F] py-2 lg:py-3 xl:py-4">
          <div className="mb-3 flex items-center justify-between lg:mb-4 xl:mb-5">
            <h3 className="flex gap-4 text-[14px] font-medium text-black md:text-[16px] xl:text-[18px]">
              Subtotal:
            </h3>
            <h3 className="flex gap-4 text-[14px] font-medium text-black md:text-[16px] xl:text-[18px]">
              ${subTotal}
            </h3>
          </div>
          <SheetClose asChild>
          <LinkButton className="rounded-full" href="/cart">VIEW CART</LinkButton>
          </SheetClose>
          <h3 className="my-2 text-center text-[14px] font-normal text-black md:text-[16px] xl:my-3 xl:text-[18px] 2xl:my-4 hidden lg:block">
            Taxes and shipping calculated at checkout
          </h3>
          <img
            src="/assets/images/visa.png"
            alt="Visa"
            className="mx-auto w-[100px] hidden lg:block"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default HearderCartIcon;
