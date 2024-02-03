import StatesDataTable from '@/components/Shipping/States/StatesDataTable'
import LinkButton from '@/components/customUI/LinkButton'
import { db } from '@/server/db'
import { StatesType } from '@/types/shipping'
import React from 'react'

const ShippingStates = async() => {
  const shippingStates:StatesType[]  = await db.states.findMany({
    select:{
      id: true,
      name:true,
    }
  })

  // console.log(shippingStates)
  return (
    <div className="p-4">
      <div className="header mb-4 flex items-center justify-between rounded-md">
        <h3 className="text-2xl font-bold">Shipping States</h3>
        <LinkButton href="/dashboard/shipping/states/addnew">
          New State
        </LinkButton>
      </div>
      <div className=" rounded-md border  bg-white p-4">
        <StatesDataTable data={shippingStates} />
      </div>
    </div>
  )
}

export default ShippingStates