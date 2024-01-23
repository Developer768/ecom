import LinkButton from '@/components/customUI/LinkButton'
import React from 'react'

const ProductsPage = () => {
  return (
    <div className='w-full'>
        <div className="header flex items-center justify-between rounded-md p-4 mb-4">
            <h3 className="font-bold text-2xl">Products</h3>
            <LinkButton href='/dashboard/products/addnew' >
            New Product
            </LinkButton>
        </div>
        <div className="rounded-md border bg-white  p-4 m-4">
            Content
        {/* <UsersDataTable  data={users} /> */}
      </div>
    </div>
  )
}

export default ProductsPage