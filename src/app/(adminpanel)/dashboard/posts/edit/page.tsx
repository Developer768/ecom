import EditPost from '@/components/Posts/EditPost';
import { db } from '@/server/db';
import React from 'react'

const EditPostPage = async({ searchParams }:{searchParams:any}) => {
    if (searchParams.postId.length != 24) {
        return (
          <div className="">
            <div className="borde rounded-md  p-4">
              <h3 className="text-2xl font-bold">Edit Post</h3>
            </div>
            <div className="m-4 rounded-md border bg-white p-4">
              <p className="">Wrong Id.</p>
            </div>
          </div>
        );
      }
    
    
      const post = await db.blogPosts.findUnique({
        where: {
          id: searchParams.postId,
        },
        // include:{
        //   category:true,
        // }
      });

      const categories = await db.blogCategory.findMany({})
      return (
        <div className="">
        <div className="borde rounded-md  p-4">
          <h3 className="text-2xl font-bold">Edit Post</h3>
        </div>
        {post ? (
          <EditPost categories={categories} data={post} />
        ) : (
          <div className="m-4 rounded-md border bg-white p-4">
            <p className="">No Post was found with given ID.</p>
          </div>
        )}
      </div>
      );
}

export default EditPostPage