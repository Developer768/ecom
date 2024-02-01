"use client";
import React, { useEffect, useState } from "react";
import LoadingProducts from "./LoadingProducts";
import { api } from "@/trpc/react";
import ProductsReels from "./ProductsReels";
import { Button } from "./ui/button";

type Props = {
  slug: string;
};

const AllProducts = (props: Props) => {
  const [page, setPage] = useState<string>("0");
  const [products, setProducts] = useState<any>();
  const [loadMoreButton, setLoadMoreButton] = useState<boolean>(true);

  const product = api.product.getProducts.useMutation();
  useEffect(() => {
    async function fetchMyAPI() {
      const response = await product.mutateAsync({
        page: page,
        slug: props.slug,
      });
      setProducts(response);
    }
    fetchMyAPI();
  }, []);

  async function changePage() {
    const pageNumber = (parseInt(page) + 12).toString();
    const response = await product.mutateAsync({
      page: pageNumber,
      slug: props.slug,
    });
    setProducts([...products, ...response]);
    console.log(response);
    if (response === undefined || response.length == 0) {
      setLoadMoreButton(true);
    }
    setPage(pageNumber);
  }

  return (
    <div>
      {products ? (
        <>
          <ProductsReels data={products} />
          {((products.length % 12 === 0) && loadMoreButton) && (
            <div className="flex items-center justify-center">
              <Button
                variant={"outline"}
                onClick={changePage}
                className="my-8 rounded-full border  border-[#707070] bg-transparent text-black hover:bg-primary hover:text-white 2xl:px-10 2xl:py-6 2xl:text-[22px]"
              >
                Load More
              </Button>
            </div>
          )}
          
        </>
      ) : (
        <LoadingProducts />
      )}
    </div>
  );
};

export default AllProducts;
