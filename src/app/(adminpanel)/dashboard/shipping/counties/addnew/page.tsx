import AddNewShippingCounty from '@/components/Shipping/Counties/AddNewShippingCounty'
import AddNewShippingState from '@/components/Shipping/States/AddNewShippingState'
import { db } from '@/server/db'
import { StatesType } from '@/types/shipping'
import React from 'react'

const AddNewShippingCountyPage = async() => {
  const states:StatesType[] = await db.states.findMany()
  return (
    <div className="">
      <div className="rounded-md borde  p-4">
        <h3 className="text-2xl font-bold">Add Shipping County</h3>
      </div>
      <AddNewShippingCounty states={states} />
    </div>
  )
}

export default AddNewShippingCountyPage