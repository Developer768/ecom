import CountiesDataTable from '@/components/Shipping/Counties/CountiesDataTable'
import LinkButton from '@/components/customUI/LinkButton'
import { db } from '@/server/db'
import { CountiesType } from '@/types/shipping'
import React from 'react'

const ShippingCountiesPage = async() => {
  const shippingCounties:CountiesType[] = await db.counties.findMany({
    include:{
      state:true
    }
  })

  console.log(shippingCounties)
  return (
    <div className="p-4">
      <div className="header mb-4 flex items-center justify-between rounded-md">
        <h3 className="text-2xl font-bold">Shipping Counties</h3>
        <LinkButton href="/dashboard/shipping/counties/addnew">
          New County
        </LinkButton>
      </div>
      <div className=" rounded-md border  bg-white p-4">
        <CountiesDataTable data={shippingCounties} />
      </div>
    </div>
  )
}

export default ShippingCountiesPage