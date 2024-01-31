import React from 'react'
import LinkButton from './customUI/LinkButton'
import ProductsReels from './ProductsReels'

type Props = {
    title: string,
    link: string,
    data:any
}

const FeaturedProducts = (props:Props) => {
    const {title,link,data} = props
  return (
    <section className='py-[32px]'>
        <div className="width px-4 py-4 3xl:px-0">
            <div className="flex items-center justify-between flex-wrap pb-4 border-b border-b-black gap-3">
                <h3 className="salome-small text-black ">{title}</h3>
                <LinkButton href={link} className='border rounded-full border-black text-black hover:border-transparent bg-transparent font-bold 2xl:text-[20px] 2xl:p-6 hover:bg-primary hover:text-white' >Show All {' ->'}</LinkButton>
            </div>
            <div className="products pt-[24px] 2xl:pt-[54px]">
                 <ProductsReels data={data} />
            </div>
        </div>
    </section>
  )
}

export default FeaturedProducts