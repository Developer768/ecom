import EditBlogTag from '@/components/Tags/EditBlogTag';
import { db } from '@/server/db';
import React from 'react'

const EditBlogTagPage = async({
    searchParams,
  }: {
    searchParams: any;
  }) => {
    if (searchParams.tagId.length != 24) {
        return (
          <div className="">
            <div className="borde rounded-md  p-4">
              <h3 className="text-2xl font-bold">Edit Blog Tag</h3>
            </div>
            <div className="m-4 rounded-md border bg-white p-4">
              <p className="">Wrong Id.</p>
            </div>
          </div>
        );
      }
    
      const tags = await db.blogTags.findUnique({
        where: {
          id: searchParams.tagId,
        },
        select: {
          id: true,
          name: true,
          desc: true,
        },
      });
      return (
        <div className="">
          <div className="borde rounded-md  p-4">
            <h3 className="text-2xl font-bold">Edit Blog Tag</h3>
          </div>
          {tags ? (
            <EditBlogTag data={tags} />
          ) : (
            <div className="m-4 rounded-md border bg-white p-4">
              <p className="">No Tag was found with given ID.</p>
            </div>
          )}
        </div>
      );
}

export default EditBlogTagPage