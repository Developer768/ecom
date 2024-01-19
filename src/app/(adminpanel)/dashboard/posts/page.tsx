import PostDataTable from '@/components/Posts/PostDataTable'
import LinkButton from '@/components/customUI/LinkButton'
import { db } from '@/server/db'
import { PostType, PrismaPostType } from '@/types/posts'
import React from 'react'

const PostsPage = async() => {
  const posts:PrismaPostType[]  = await db.blogPosts.findMany({
    include:{
      category:true,
    }
  })
  // console.log(posts)
  return (
    <div className="p-4">
      <div className="header mb-4 flex items-center justify-between rounded-md">
        <h3 className="text-2xl font-bold">Posts</h3>
        <LinkButton href="/dashboard/posts/addnew">
          Create Post
        </LinkButton>
      </div>
      <div className=" rounded-md border  bg-white p-4">
        <PostDataTable data={posts} />
      </div>
    </div>
  )
}

export default PostsPage