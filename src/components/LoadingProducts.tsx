import React from 'react'
import { Skeleton } from './ui/skeleton'

const LoadingProducts = () => {
  return (
    <div className='width'>
        <div className="products-reel grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(12)].map((page,i) =>
            <Skeleton key={i} className="w-full h-[400px] rounded-[21px]" />
          )}
        </div>
    </div>
  )
}

export default LoadingProducts