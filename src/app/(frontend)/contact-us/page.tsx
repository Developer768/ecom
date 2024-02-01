"use client";
import ContactUsForm from "@/components/ContactUsForm";
import { Icons } from "@/lib/Icons";
import Link from "next/link";
import React, { Suspense } from "react";

const ContactUsPage = () => {
  return (
    <div>
      <section className="header -mt-[1px] flex h-[200px] items-center justify-center bg-[url('/assets/images/contact-bg.png')] bg-cover bg-center lg:h-[280px]  3xl:h-[347px]">
        <h3 className="salome-large text-white">Contact Us</h3>
      </section>
      <section className="contact-cols">
        <div className="width px-4 py-4 3xl:px-0">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10 xl:gap-[50px] ">
            {/* Our Location */}
            <div className="border-b border-dashed border-b-primary  py-5 lg:py-[26px]">
              <Link
                href={"#"}
                className="flex flex-col items-center justify-center"
              >
                <div className="icon mb-[16px] flex aspect-square w-[44px] items-center justify-center rounded-full bg-primary lg:mb-[28px] lg:w-[80px]">
                  <img
                    src="/assets/svgs/location-icon.svg"
                    alt="location"
                    className="lg:w-[30px]"
                  />
                </div>
                <h3 className="mb-2 text-[18px] font-bold leading-none text-black lg:mb-4 lg:text-[35px]">
                  Our Location
                </h3>
                <p className="text-center text-[16px] font-normal leading-none text-black lg:text-[24px]">
                  Lorem Ipsum is simply dummy{" "}
                </p>
              </Link>
            </div>
            {/* Mail */}
            <div className="border-b border-dashed border-b-primary  py-5 lg:py-[26px]">
              <Link
                href={"#"}
                className="flex flex-col items-center justify-center"
              >
                <div className="icon mb-[16px] flex aspect-square w-[44px] items-center justify-center rounded-full bg-primary lg:mb-[28px] lg:w-[80px]">
                  <img
                    src="/assets/svgs/mail-icon.svg"
                    alt="location"
                    className="lg:w-[30px]"
                  />
                </div>
                <h3 className="mb-2 text-[18px] font-bold leading-none text-black lg:mb-4 lg:text-[35px]">
                  Mail Us 24/7
                </h3>
                <p className="text-center text-[16px] font-normal leading-none text-black lg:text-[24px]">
                  hello@kratom.com
                </p>
              </Link>
            </div>
            {/* Phone */}
            <div className="border-b border-dashed border-b-primary  py-5 lg:py-[26px]">
              <Link
                href={"#"}
                className="flex flex-col items-center justify-center"
              >
                <div className="icon mb-[16px] flex aspect-square w-[44px] items-center justify-center rounded-full bg-primary lg:mb-[28px] lg:w-[80px]">
                  <img
                    src="/assets/svgs/phone-icon.svg"
                    alt="phone"
                    className="lg:w-[30px]"
                  />
                </div>
                <h3 className="mb-2 text-[18px] font-bold leading-none text-black lg:mb-4 lg:text-[35px]">
                  Phone Us 24/7
                </h3>
                <p className="text-center text-[16px] font-normal leading-none text-black lg:text-[24px]">
                  x-xxx-xxx-xxxx
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:mt-[50px] xl:mt-[80px] 3xl:mt-[110px]">
         <div className="widt 3xl:ml-[86px]">
            <div className="flex flex-col gap-4 lg:flex-row">
                <div className="content px-4 py-4 3xl:px-0 lg:w-[40%]">
                    <h3 className="text-black text-[18px] lg:text-[24px] 2xl:text-[35px] font-bold mb-4 lg:mb-7">Get in touch with us</h3>
                    <p className="text-[16px] text-black lg:text-[18px] 2xl:text-[20px] mb-5 lg:mb-7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley  been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                    <h3 className="text-black text-[18px] lg:text-[22px] 2xl:text-[28px] font-bold mb-4 lg:mb-5">Phone number</h3>
                    <h3 className="text-primary text-[20px] lg:text-[24px] 2xl:text-[30px] font-bold w-fit border-b border-b-grey pb-2 mb-4 lg:mb-7">+ 0000 00 00 0000</h3>
                    <p className="text-[16px] text-black lg:text-[18px] 2xl:text-[20px]">The line is open 24/7, 365 days a year</p>

                </div>
                <div className="form bg-darkGreen rounded-tl-[50px] px-4 py-6 lg:p-[38px] 3xl:p-[60px] lg:w-[60%]">
                    <h3 className="salome-small text-white">Contact Us</h3>
                    <ContactUsForm />
                </div>
            </div>
         </div>
      </section>

      <section className="map relative">
      <div className="">
          <div className="map_responsive">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d461677.868215081!2d55.04035478621921!3d25.30896292912238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1689180317480!5m2!1sen!2sus" width="600" height="450" loading="lazy" className="w-full h-[300px] xl:h-[400px] 3xl:h-[500px]"></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
