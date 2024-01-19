import BlogCategoriesDataTable from '@/components/BlogCategories/BlogCategoriesDataTable'
import LinkButton from '@/components/customUI/LinkButton'
import { db } from '@/server/db'
import { BlogCategoryType } from '@/types/categories'
import React from 'react'

const BlogCategories = async() => {
  const blogsCategories: BlogCategoryType[]  = await db.blogCategory.findMany({
    select:{
      id: true,
      category_name: true,
      slug: true,
      description: true,
      metaTitle: true,
      metaDescription: true
    }
  })
  return (
    <div className="p-4">
      <div className="header mb-4 flex items-center justify-between rounded-md">
        <h3 className="text-2xl font-bold">Blog Categories</h3>
        <LinkButton href="/dashboard/categories/blog/addnew">
          New Category
        </LinkButton>
      </div>
      <div className=" rounded-md border  bg-white p-4">
        <BlogCategoriesDataTable data={blogsCategories} />
      </div>
    </div>
  )
}

export default BlogCategories