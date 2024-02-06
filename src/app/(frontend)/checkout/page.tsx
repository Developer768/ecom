import Checkout from '@/components/Checkout'
import { db } from '@/server/db'
import { CountiesType, StatesType } from '@/types/shipping'
import React from 'react'

const CheckoutPage = async() => {
  const shippingCounties:CountiesType[] = await db.counties.findMany({
    include:{
      state:true
    }
  })
  const shippingStates:StatesType[]  = await db.states.findMany({
    select:{
      id: true,
      name:true,
    }
  })
  return (
    <div>
      <div className="width px-4 py-4 3xl:px-0">
      <div className="">
          <h3 className="salome-large py-4 text-green lg:py-6 3xl:py-8">
            Checkout
          </h3>
          <Checkout counties={shippingCounties}  states={shippingStates}/>
          
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage