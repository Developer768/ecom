import BlogTagsDataTable from '@/components/Tags/BlogTagsDataTable'
import UsersDataTable from '@/components/Users/UsersDataTable'
import LinkButton from '@/components/customUI/LinkButton'
import { db } from '@/server/db'
import { TagsType } from '@/types/tags'
import React from 'react'



const TagsPage = async() => {
  const tags:TagsType  = await db.blogTags.findMany({
    select:{
      id: true,
      name: true,
      desc: true,
    }
  })
  console.log(tags)
  return (
    <div className='w-full'>
        <div className="header flex items-center justify-between rounded-md p-4 mb-4">
            <h3 className="font-bold text-2xl">Tags</h3>
            <LinkButton href='/dashboard/tags/addnew' >
            New Tag
            </LinkButton>
        </div>
        <div className="rounded-md border bg-white  p-4 m-4">
        <BlogTagsDataTable  data={tags} />
      </div>
    </div>
  )
}

export default TagsPage