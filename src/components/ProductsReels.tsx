import React from "react";
import ProductCatalog from "./ProductCatalog";

type Props = {
  data: any;
};
const ProductsReels = (props: Props) => {
  const { data } = props;
  //   console.log(data)
  return (
    <div className="products-reel grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {data.map((prod: any) => (
        <ProductCatalog data={prod} key={prod.id} />
      ))}
    </div>
  );
};

export default ProductsReels;
