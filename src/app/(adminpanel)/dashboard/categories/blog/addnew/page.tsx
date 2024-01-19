import AddNewBlogCategories from '@/components/BlogCategories/AddNewBlogCategories'
import React from 'react'

const AddNewBlogCategory = () => {
  return (
    <div className="">
      <div className="rounded-md borde  p-4">
        <h3 className="text-2xl font-bold">Add Blog Categories</h3>
      </div>
      <AddNewBlogCategories />
    </div>
  )
}

export default AddNewBlogCategory