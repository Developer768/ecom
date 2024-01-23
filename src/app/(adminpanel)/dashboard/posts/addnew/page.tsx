import AddNewPost from '@/components/Posts/AddNewPost'
import { db } from '@/server/db'
import { ProductCategoryType } from '@/types/categories'
import React from 'react'


const AddNewPosts = async() => {
  const categories:ProductCategoryType[] = await db.blogCategory.findMany()

  return (
    <div className="w-full">
      <div className="rounded-md   p-4">
        <h3 className="text-2xl font-bold">Create New Post</h3>
      </div>
      <AddNewPost  categories={categories}/>
    </div>
  )
}

export default AddNewPosts