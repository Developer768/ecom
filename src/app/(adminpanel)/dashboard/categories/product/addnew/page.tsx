import AddNewProductCategory from '@/components/ProductCategories/AddNewProductCategory'
import React from 'react'

const AddNewProductCategories = () => {
  return (
    <div className="">
      <div className="rounded-md borde  p-4">
        <h3 className="text-2xl font-bold">Add Product Categories</h3>
      </div>
      {/* <AddNewUser /> */}
      <AddNewProductCategory />
    </div>
  )
}

export default AddNewProductCategories