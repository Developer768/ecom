"use client"
import React from "react";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Icons } from "@/lib/Icons";

const Testimonials = () => {
  return (
    <div className="bg-green py-5 3xl:py-[60px] rounded-tl-3xl lg:rounded-tl-[45px]">
      <div className="width px-4 py-4 3xl:px-0">
        <h2 className="section-heading salome-large text-lightGreen">
          Men say
        </h2>
        <div className="testimonies mx-auto max-w-[1130px] mt-[30px] lg:mt-[60px] 2xl:mt-[100px]">
          <Swiper
            slidesPerView={1}
            loop
            navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            className="testimonial x-[160px] relative"
          >
            <div className="mx-auto max-w-[1050px]">
              <SwiperSlide className="">
                <div className="slide">
                  <div className="testimony-product flex flex-wrap items-center border-b border-b-white pb-[18px]">
                    <div className="img mr-[18px]">
                      <img src="/assets/images/prod.png" alt="product" />
                    </div>
                    <div className="prod-content">
                      <div className="stars flex items-center justify-start gap-1">
                        <Icons.Star className="fill-golden text-golden h-[18px] w-[18px]" />
                        <Icons.Star className="fill-golden text-golden h-[18px] w-[18px]" />
                        <Icons.Star className="fill-golden text-golden h-[18px] w-[18px]" />
                        <Icons.Star className="fill-golden text-golden h-[18px] w-[18px]" />
                        <Icons.Star className="fill-golden text-golden h-[18px] w-[18px]" />
                      </div>
                      <p className="pt-3 font-dmSans text-[22px] font-bold leading-none text-white">
                        Awsome
                      </p>
                      <h3 className="py-4 font-dmSans text-[24px] font-bold leading-none text-white">
                        OPMS Kratom Liquid Extract
                      </h3>
                      <p className="font-dmSans text-[16px] leading-none text-white ">
                        (Shot 8.8ml)
                      </p>
                    </div>
                  </div>
                  <p className="py-7 font-dmSans text-[16px] leading-tight text-white md:text-[22px] ">
                    This is my main go to. Every morning I take 2 with a cup of
                    coffee. Takes me all the way through the work day with lots
                    of energy and mental clarity. I highly recommend these OPMS
                    Gold capsules.
                  </p>
                  <h3 className="border-b-primary text-primary w-fit border-b pb-3 pt-[38] font-salome text-[18px] leading-tight sm:text-[26px]  xl:text-[30px]">
                    Vonnestine J.
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="slide">
                  <div className="testimony-product flex flex-wrap items-center border-b border-b-white pb-[18px]">
                    <div className="img mr-[18px]">
                      <img src="/assets/images/prod.png" alt="product" />
                    </div>
                    <div className="prod-content">
                      <div className="stars flex items-center justify-start gap-1">
                        <Icons.Star className="fill-golden text-golden h-[18px] w-[18px]" />
                        <Icons.Star className="fill-golden text-golden h-[18px] w-[18px]" />
                        <Icons.Star className="fill-golden text-golden h-[18px] w-[18px]" />
                        <Icons.Star className="fill-golden text-golden h-[18px] w-[18px]" />
                        <Icons.Star className="fill-golden text-golden h-[18px] w-[18px]" />
                      </div>
                      <p className="pt-3 font-dmSans text-[22px] font-bold leading-none text-white">
                        Awsome
                      </p>
                      <h3 className="py-4 font-dmSans text-[24px] font-bold leading-none text-white">
                        OPMS Kratom Liquid Extract
                      </h3>
                      <p className="font-dmSans text-[16px] leading-none text-white ">
                        (Shot 8.8ml)
                      </p>
                    </div>
                  </div>
                  <p className="py-7 font-dmSans text-[16px] leading-tight text-white md:text-[22px] ">
                    This is my main go to. Every morning I take 2 with a cup of
                    coffee. Takes me all the way through the work day with lots
                    of energy and mental clarity. I highly recommend these OPMS
                    Gold capsules.
                  </p>
                  <h3 className="border-b-primary text-primary w-fit border-b pb-3 pt-[38] font-salome text-[18px] leading-tight sm:text-[26px]  xl:text-[30px]">
                    Vonnestine J.
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="slide">
                  <div className="testimony-product flex flex-wrap items-center border-b border-b-white pb-[18px]">
                    <div className="img mr-[18px]">
                      <img src="/assets/images/prod.png" alt="product" />
                    </div>
                    <div className="prod-content">
                      <div className="stars flex items-center justify-start gap-1">
                        <Icons.Star className="fill-golden text-golden h-[18px] w-[18px]" />
                        <Icons.Star className="fill-golden text-golden h-[18px] w-[18px]" />
                        <Icons.Star className="fill-golden text-golden h-[18px] w-[18px]" />
                        <Icons.Star className="fill-golden text-golden h-[18px] w-[18px]" />
                        <Icons.Star className="fill-golden text-golden h-[18px] w-[18px]" />
                      </div>
                      <p className="pt-3 font-dmSans text-[22px] font-bold leading-none text-white">
                        Awsome
                      </p>
                      <h3 className="py-4 font-dmSans text-[24px] font-bold leading-none text-white">
                        OPMS Kratom Liquid Extract
                      </h3>
                      <p className="font-dmSans text-[16px] leading-none text-white ">
                        (Shot 8.8ml)
                      </p>
                    </div>
                  </div>
                  <p className="py-7 font-dmSans text-[16px] leading-tight text-white md:text-[22px] ">
                    This is my main go to. Every morning I take 2 with a cup of
                    coffee. Takes me all the way through the work day with lots
                    of energy and mental clarity. I highly recommend these OPMS
                    Gold capsules.
                  </p>
                  <h3 className="border-b-primary text-primary w-fit border-b pb-3 pt-[38] font-salome text-[18px] leading-tight sm:text-[26px]  xl:text-[30px]">
                    Vonnestine J.
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="slide">
                  <div className="testimony-product flex flex-wrap items-center border-b border-b-white pb-[18px]">
                    <div className="img mr-[18px]">
                      <img src="/assets/images/prod.png" alt="product" />
                    </div>
                    <div className="prod-content">
                      <div className="stars flex items-center justify-start gap-1">
                        <Icons.Star className="fill-golden text-golden h-[18px] w-[18px]" />
                        <Icons.Star className="fill-golden text-golden h-[18px] w-[18px]" />
                        <Icons.Star className="fill-golden text-golden h-[18px] w-[18px]" />
                        <Icons.Star className="fill-golden text-golden h-[18px] w-[18px]" />
                        <Icons.Star className="fill-golden text-golden h-[18px] w-[18px]" />
                      </div>
                      <p className="pt-3 font-dmSans text-[22px] font-bold leading-none text-white">
                        Awsome
                      </p>
                      <h3 className="py-4 font-dmSans text-[24px] font-bold leading-none text-white">
                        OPMS Kratom Liquid Extract
                      </h3>
                      <p className="font-dmSans text-[16px] leading-none text-white ">
                        (Shot 8.8ml)
                      </p>
                    </div>
                  </div>
                  <p className="py-7 font-dmSans text-[16px] leading-tight text-white md:text-[22px] ">
                    This is my main go to. Every morning I take 2 with a cup of
                    coffee. Takes me all the way through the work day with lots
                    of energy and mental clarity. I highly recommend these OPMS
                    Gold capsules.
                  </p>
                  <h3 className="border-b-primary text-primary w-fit border-b pb-3 pt-[38] font-salome text-[18px] leading-tight sm:text-[26px]  xl:text-[30px]">
                    Vonnestine J.
                  </h3>
                </div>
              </SwiperSlide>
            </div>
            <div className="mx-auto mt-[30px] flex w-fit items-center gap-4">
              <div className="arrow-left bg-lightGreen left-0 top-[45%] z-10  flex h-[40px] w-[40px]  lg:h-[68px] lg:w-[68px] cursor-pointer items-center justify-center rounded-full ">
                <Icons.ChevronLeft className="arrow  text-[18px] text-white" />
              </div>
              <div className="arrow-right bg-lightGreen right-0 top-[45%] z-10 flex   h-[40px] w-[40px]  lg:h-[68px] lg:w-[68px] cursor-pointer items-center justify-center rounded-full">
                <Icons.ChevronRight className="arrow  arrow-right text-[18px] text-white" />
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
