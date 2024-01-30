import Categories from '@/components/Categories'
import FAQ from '@/components/FAQ'
import Hero from '@/components/Hero'
import Testimonials from '@/components/Testimonials'
import LinkButton from '@/components/customUI/LinkButton'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <section className="what-is-kratom ">
        <div className="width bg-greyishGreen rounded-b-3xl grid grid-cols-1 xl:grid-cols-2">
          <div className="img mx-auto  xl:-mt-[60px]">
            <img src="/assets/images/powder-bowel.png" alt="Powder" />
          </div>
          <div className="content p-4 md:p-[25px] lg:p-[50px] 3xl:px-[70px] ">
          <h2 className="section-heading salome-small text-white mb-[20px] 3xl:mb-[55px] ">
                What is Kratom?
            </h2>
            <p className="text-white font-dmSans text-[16px] md:text-[18px] lg:text-[22px]   mb-[15px] lg:mb-[50px] 3xl:mb-[150px]">Kratom, scientifically known as Mitragyna speciosa, is a tropical evergreen tree native to Southeast Asia, particularly Indonesia, Malaysia, Thailand, and Papua New Guinea. It belongs to the coffee family and has been traditionally used for centuries in the region for its potential medicinal properties.</p>
            <p className="text-white font-dmSans text-[16px] md:text-[18px] lg:text-[22px]   mb-[15px] lg:mb-[50px] 3xl:mb-[150px]">Kratom leaves contain active compounds, including alkaloids such as mitragynine and 7-hydroxymitragynine, which interact with receptors in the brain, producing various effects. Depending on the strain and dosage, kratom can have stimulating or sedating properties, and it is commonly used for relaxation, mood enhancement, pain relief, and as an energy booster.</p>
            <LinkButton href='/shop' className='rounded-full bg-white text-green hover:bg-primary hover:text-white' >Shop Now {"->"}</LinkButton>
          </div>
        </div>
      </section>
      HomePage
      <Testimonials />
      <FAQ />
    </div>
  )
}

export default HomePage