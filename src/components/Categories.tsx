"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Icons } from "@/lib/Icons";
import LinkButton from "./customUI/LinkButton";

const Categories = () => {
  return (
    <section className="bg-green py-[40px]">
      <div className="width px-4 py-4 3xl:px-0">
      <div className="head mb-[35px] flex items-center justify-between border-b border-b-primary pb-[20px]">
              <h2 className="salome-small text-white">Categories</h2>
              <div className="nav flex w-fit items-center gap-4">
                <div className="arrow-left  bg-lightGreen   4xl:h-[55px] 4xl:w-[55px] flex h-[28px] w-[28px] cursor-pointer  items-center justify-center  rounded-full md:h-[38px]  md:w-[38px] lg:h-[48px]  lg:w-[48px] xl:h-[48px]  xl:w-[48px] 2xl:h-[48px]  2xl:w-[48px] 3xl:h-[48px]  3xl:w-[48px]">
                  <Icons.ChevronLeft className="arrow  text-[18px] text-white" />
                </div>
                <div className="arrow-right  bg-lightGreen 4xl:h-[55px] 4xl:w-[55px] flex h-[28px] w-[28px] cursor-pointer  items-center justify-center  rounded-full md:h-[38px]  md:w-[38px] lg:h-[48px]  lg:w-[48px] xl:h-[48px]  xl:w-[48px] 2xl:h-[48px]  2xl:w-[48px] 3xl:h-[48px]  3xl:w-[48px]">
                  <Icons.ChevronRight className="arrow  arrow-right text-[18px] text-white" />
                </div>
              </div>
            </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          loop
          navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            350: {
              slidesPerView: 1,
              spaceBetween: 25,
            },
            650: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1025: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1600: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
          }}
          modules={[Navigation, Autoplay]}
          className="testimonial relative"
        >
          <div className="max-w-[1729px] flex items-center justify-between">
            <SwiperSlide className="">
                <div className="slide  bg-white rounded-3xl px-[27px] py-[34px] h-[390px] max-w-[400px] min-w-[300px]  border-[3px] hover:border-primary bg-no-repeat bg-right-bottom group" style={{backgroundImage:"url(/assets/images/kratom-capsule.png)"}}>
                    <h3 className="text-black font-dmSans text-[24px] lg:text-[28px] xl:text-[35px]   4 font-medium mb-[20px]">Kratom Capsule</h3>
                    <LinkButton className="hidden group-hover:flex w-fit rounded-full" href="/shop/kratom-capsule">Shop Now {"->"}</LinkButton>
                </div>
              </SwiperSlide>
            <SwiperSlide className="">
                <div className="slide  bg-white rounded-3xl px-[27px] py-[34px] h-[390px] max-w-[400px] min-w-[300px]  border-[3px] hover:border-primary bg-no-repeat bg-right-bottom group" style={{backgroundImage:"url(/assets/images/kratom-gummies.png)"}}>
                    <h3 className="text-black font-dmSans text-[24px] lg:text-[28px] xl:text-[35px]   4 font-medium mb-[20px]">Kratom Gummies</h3>
                    <LinkButton className="hidden group-hover:flex w-fit rounded-full" href="/shop/kratom-gummies">Shop Now {"->"}</LinkButton>
                </div>
              </SwiperSlide>
            <SwiperSlide className="">
                <div className="slide  bg-white rounded-3xl px-[27px] py-[34px] h-[390px] max-w-[400px] min-w-[300px]  border-[3px] hover:border-primary bg-no-repeat bg-right-bottom group" style={{backgroundImage:"url(/assets/images/kratom-liquid-shot.png)"}}>
                    <h3 className="text-black font-dmSans text-[24px] lg:text-[28px] xl:text-[35px]   4 font-medium mb-[20px]">Kratom Liquid Shot</h3>
                    <LinkButton className="hidden group-hover:flex w-fit rounded-full" href="/shop/kratom-liquid-shot">Shop Now {"->"}</LinkButton>
                </div>
              </SwiperSlide>
            <SwiperSlide className="">
                <div className="slide  bg-white rounded-3xl px-[27px] py-[34px] h-[390px] max-w-[400px] min-w-[300px]  border-[3px] hover:border-primary bg-no-repeat bg-right-bottom group" style={{backgroundImage:"url(/assets/images/kratom-powder.png)"}}>
                    <h3 className="text-black font-dmSans text-[24px] lg:text-[28px] xl:text-[35px]   4 font-medium mb-[20px]">Kratom Powder</h3>
                    <LinkButton className="hidden group-hover:flex w-fit rounded-full" href="/shop/kratom-powder">Shop Now {"->"}</LinkButton>
                </div>
              </SwiperSlide>

              <SwiperSlide className="">
                <div className="slide  bg-white rounded-3xl px-[27px] py-[34px] h-[390px] max-w-[400px] min-w-[300px]  border-[3px] hover:border-primary bg-no-repeat bg-right-bottom group" style={{backgroundImage:"url(/assets/images/kratom-capsule.png)"}}>
                    <h3 className="text-black font-dmSans text-[24px] lg:text-[28px] xl:text-[35px]   4 font-medium mb-[20px]">Kratom Capsule</h3>
                    <LinkButton className="hidden group-hover:flex w-fit rounded-full" href="/shop/kratom-capsule">Shop Now {"->"}</LinkButton>
                </div>
              </SwiperSlide>
            <SwiperSlide className="">
                <div className="slide  bg-white rounded-3xl px-[27px] py-[34px] h-[390px] max-w-[400px] min-w-[300px]  border-[3px] hover:border-primary bg-no-repeat bg-right-bottom group" style={{backgroundImage:"url(/assets/images/kratom-gummies.png)"}}>
                    <h3 className="text-black font-dmSans text-[24px] lg:text-[28px] xl:text-[35px]   4 font-medium mb-[20px]">Kratom Gummies</h3>
                    <LinkButton className="hidden group-hover:flex w-fit rounded-full" href="/shop/kratom-gummies">Shop Now {"->"}</LinkButton>
                </div>
              </SwiperSlide>
            <SwiperSlide className="">
                <div className="slide  bg-white rounded-3xl px-[27px] py-[34px] h-[390px] max-w-[400px] min-w-[300px]  border-[3px] hover:border-primary bg-no-repeat bg-right-bottom group" style={{backgroundImage:"url(/assets/images/kratom-liquid-shot.png)"}}>
                    <h3 className="text-black font-dmSans text-[24px] lg:text-[28px] xl:text-[35px]   4 font-medium mb-[20px]">Kratom Liquid Shot</h3>
                    <LinkButton className="hidden group-hover:flex w-fit rounded-full" href="/shop/kratom-liquid-shot">Shop Now {"->"}</LinkButton>
                </div>
              </SwiperSlide>
            <SwiperSlide className="">
                <div className="slide  bg-white rounded-3xl px-[27px] py-[34px] h-[390px] max-w-[400px] min-w-[300px]  border-[3px] hover:border-primary bg-no-repeat bg-right-bottom group" style={{backgroundImage:"url(/assets/images/kratom-powder.png)"}}>
                    <h3 className="text-black font-dmSans text-[24px] lg:text-[28px] xl:text-[35px]   4 font-medium mb-[20px]">Kratom Powder</h3>
                    <LinkButton className="hidden group-hover:flex w-fit rounded-full" href="/shop/kratom-powder">Shop Now {"->"}</LinkButton>
                </div>
              </SwiperSlide>
            
          </div>
        </Swiper>
        <div className="py-[20px] lg:py-[40px] 3xl:py-[60px]"></div>
      </div>
    </section>
  );
};

export default Categories;
