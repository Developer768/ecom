import EditShippingCounty from '@/components/Shipping/Counties/EditShippingCounty';
import EditShippingState from '@/components/Shipping/States/EditShippingState';
import { db } from '@/server/db';
import { StatesType } from '@/types/shipping';
import React from 'react'

const EditShippingCountyPage =  async ({
    searchParams,
  }: {
    searchParams: any;
  }) => {
    if (searchParams.countyId.length != 24) {
        return (
          <div className="">
            <div className="borde rounded-md  p-4">
              <h3 className="text-2xl font-bold">Edit Shipping County</h3>
            </div>
            <div className="m-4 rounded-md border bg-white p-4">
              <p className="">Wrong Id.</p>
            </div>
          </div>
        );
      }
      const states:StatesType[] = await db.states.findMany()
      const county = await db.counties.findUnique({
        where: {
          id: searchParams.countyId,
        },
        include:{
          state:true
        }
      });
      return (
        <div className="p-4">
          <div className="borde rounded-md  p-4">
            <h3 className="text-2xl font-bold">Edit Shipping County</h3>
          </div>
          {county ? (
            <EditShippingCounty data={county} states={states} />
          ) : (
            <div className="m-4 rounded-md border bg-white p-4">
              <p className="">No County was found with given ID.</p>
            </div>
          )}
        </div>
      )
}

export default EditShippingCountyPage