import React from "react";
import LinkButton from "./customUI/LinkButton";

const Hero = () => {
  return (
    <section className="relative ">
      <div className="width px-4 3xl:px-0 py-[40px] sm:py-[60px] md:py-[70px] lg:py-[180px] 3xl:h-[768px]">
        <h2 className="font-salome text-[26px] text-green md:text-[28px] lg:text-[34px] xl:text-[52px] 3xl:text-[72px]">
          Want to Unlock Nature's Potential?
        </h2>
        <p className="my-5  max-w-[70%] lg:max-w-[60%] font-dmSans text-[16px] text-black md:text-[18px] lg:text-[24px]">
          Try Kratom a path to Holistic wellness. Kratom is a natural herbal
          supplement derived from the leaves of the Mitragyna speciose tree,
          which is native to Southeast Asia.
        </p>
        <LinkButton href="/shop" className="rounded-full">
          Shop Now {" ->"}
        </LinkButton>
        <img src="/assets/images/hero-img.png" alt="products" className='sm:absolute  sm:ml-auto sm:right-4 sm:w-[50%] md:w-[45%] lg:w-[55%] xl:w-[45%] sm:bottom-[70px] xl:bottom-[30px] 3xl:bottom-[20px] md:bottom-[60px]   z-50' />
      </div>
      <div className="rounded-tl-3xl bg-green px-[50px] py-[20px] lg:rounded-tl-[45px]">
        <div className="width">
            <div className="w-fit">

          <a href="#footer" >
            <img
              src="/assets/images/arrow.png"
              alt="arrow"
              className="w-[15px] cursor-pointer"
              />
          </a>
              </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
