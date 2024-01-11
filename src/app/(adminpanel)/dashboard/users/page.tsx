import UsersDataTable from '@/components/Users/UsersDataTable'
import LinkButton from '@/components/customUI/LinkButton'
import { db } from '@/server/db'
import { UsersType } from '@/types/users'
import React from 'react'



const UsersPage = async() => {
  const users:UsersType  = await db.user.findMany({
    select:{
      id: true,
      name: true,
      email: true,
      avatar: true
    }
  })
  // console.log(users)
  return (
    <div className=''>
        <div className="header flex items-center justify-between rounded-md p-4 mb-4">
            <h3 className="font-bold text-2xl">Users</h3>
            <LinkButton href='/dashboard/users/addnew' >
            New User
            </LinkButton>
        </div>
        <div className="rounded-md border bg-white  p-4 m-4">
        <UsersDataTable  data={users} />
      </div>
    </div>
  )
}

export default UsersPage