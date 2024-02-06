import Cart from "@/components/Cart";
import React from "react";

const CartPage = () => {
  return (
    <div>
      <div className="width px-4 py-4 3xl:px-0">
      <div className="">
          <h3 className="salome-large py-4 text-green lg:py-6 3xl:py-8">
            Cart
          </h3>
          <Cart />
          
        </div>
      </div>
    </div>
  );
};

export default CartPage;
