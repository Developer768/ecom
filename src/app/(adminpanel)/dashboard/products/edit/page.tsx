import EditProduct from '@/components/Products/EditProduct';
import { db } from '@/server/db';
import React from 'react'

const EditProductPage = async({ searchParams }:{searchParams:any}) => {
    if (searchParams.productId.length != 24) {
        return (
          <div className="">
            <div className="borde rounded-md  p-4">
              <h3 className="text-2xl font-bold">Edit Product</h3>
            </div>
            <div className="m-4 rounded-md border bg-white p-4">
              <p className="">Wrong Id.</p>
            </div>
          </div>
        );
      }
    
    
      const product = await db.products.findUnique({
        where: {
          id: searchParams.productId,
        },
        // include:{
        //     category:true
        // }
      });
      const categories = await db.productCategory.findMany({})
    //   console.log(product)
      return (
        <div className="">
        <div className="borde rounded-md  p-4">
          <h3 className="text-2xl font-bold">Edit Product</h3>
        </div>
        {product ? (
          <EditProduct data={product} categories={categories} />
        ) : (
          <div className="m-4 rounded-md border bg-white p-4">
            <p className="">No Product was found with given ID.</p>
          </div>
        )}
      </div>
      );
}

export default EditProductPage