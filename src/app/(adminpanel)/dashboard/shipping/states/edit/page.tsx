import EditShippingState from '@/components/Shipping/States/EditShippingState';
import { db } from '@/server/db';
import React from 'react'

const EditShippingStatePage =  async ({
    searchParams,
  }: {
    searchParams: any;
  }) => {
    if (searchParams.stateId.length != 24) {
        return (
          <div className="">
            <div className="borde rounded-md  p-4">
              <h3 className="text-2xl font-bold">Edit Shipping State</h3>
            </div>
            <div className="m-4 rounded-md border bg-white p-4">
              <p className="">Wrong Id.</p>
            </div>
          </div>
        );
      }
    
      const state = await db.states.findUnique({
        where: {
          id: searchParams.stateId,
        },
        select: {
          id: true,
          name: true,
        },
      });
      return (
        <div className="p-4">
          <div className="borde rounded-md  p-4">
            <h3 className="text-2xl font-bold">Edit Shipping State</h3>
          </div>
          {state ? (
            <EditShippingState data={state} />
          ) : (
            <div className="m-4 rounded-md border bg-white p-4">
              <p className="">No Shipping State was found with given ID.</p>
            </div>
          )}
        </div>
      )
}

export default EditShippingStatePage