import AllPosts from '@/components/AllPosts'
import React from 'react'

const BlogPage = () => {
  return (
    <div>
      <div className="width px-4 py-4 3xl:px-0">
        <div className="">
          <h3 className="salome-large py-4 text-green lg:py-8 3xl:py-12">
            Blog Posts
          </h3>
          
        </div>
        <div className="products width">
          <AllPosts slug={"all"} />
        </div>
      </div>
    </div>
  )
}

export default BlogPage