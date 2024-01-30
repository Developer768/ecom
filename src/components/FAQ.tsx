import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FAQ = () => {
  return (
    <div className="bg-green py-5 3xl:py-[60px]">
      <div className="width px-4 py-4 3xl:px-0">
        <div className="faqs flex flex-col rounded-3xl bg-greyishGreen lg:flex-row lg:justify-between lg:rounded-[45px]">
          <div className="faq-questions px-4 py-5 lg:p-8  3xl:p-[70px] lg:w-[60%] ">
            <h2 className="section-heading salome-small text-white">
              Common Kratom Questions
            </h2>
            <div className="accordion mt-5 lg:mt-[45px] ">
              <Accordion type="single" collapsible className="w-full space-y-3">
                <AccordionItem
                  value="item-1"
                  className="w-full rounded-3xl border-0 bg-accordionBg px-4 text-white lg:rounded-[32px]"
                >
                  <AccordionTrigger className="w-full text-left font-dmSans text-[20px] no-underline hover:no-underline 2xl:text-[25px]">
                    What is Kratom?
                  </AccordionTrigger>
                  <AccordionContent className="text-[16px] 2xl:text-[18px]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Consectetur sequi voluptatibus quis qui, id cupiditate culpa
                    laborum numquam odio modi tenetur cumque aspernatur,
                    pariatur doloribus sed, voluptatem delectus in! Perferendis
                    aut facilis amet similique perspiciatis optio excepturi, ex
                    sint deserunt delectus incidunt nisi eos fugit earum aliquid
                    sunt quasi eius.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-2"
                  className="w-full rounded-3xl border-0 bg-accordionBg px-4 text-white lg:rounded-[32px]"
                >
                  <AccordionTrigger className="w-full text-left font-dmSans text-[20px] no-underline hover:no-underline 2xl:text-[25px]">
                  What Does Kratom Do?
                  </AccordionTrigger>
                  <AccordionContent className="text-[16px] 2xl:text-[18px]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Consectetur sequi voluptatibus quis qui, id cupiditate culpa
                    laborum numquam odio modi tenetur cumque aspernatur,
                    pariatur doloribus sed, voluptatem delectus in! Perferendis
                    aut facilis amet similique perspiciatis optio excepturi, ex
                    sint deserunt delectus incidunt nisi eos fugit earum aliquid
                    sunt quasi eius.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-3"
                  className="w-full rounded-3xl border-0 bg-accordionBg px-4 text-white lg:rounded-[32px]"
                >
                  <AccordionTrigger className="w-full text-left font-dmSans text-[20px] no-underline hover:no-underline 2xl:text-[25px]">
                  Is Kratom Legal?
                  </AccordionTrigger>
                  <AccordionContent className="text-[16px] 2xl:text-[18px]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Consectetur sequi voluptatibus quis qui, id cupiditate culpa
                    laborum numquam odio modi tenetur cumque aspernatur,
                    pariatur doloribus sed, voluptatem delectus in! Perferendis
                    aut facilis amet similique perspiciatis optio excepturi, ex
                    sint deserunt delectus incidunt nisi eos fugit earum aliquid
                    sunt quasi eius.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-4"
                  className="w-full rounded-3xl border-0 bg-accordionBg px-4 text-white lg:rounded-[32px]"
                >
                  <AccordionTrigger className="w-full text-left font-dmSans text-[20px] no-underline hover:no-underline 2xl:text-[25px]">
                  What Are the Benefits of Kratom?
                  </AccordionTrigger>
                  <AccordionContent className="text-[16px] 2xl:text-[18px]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Consectetur sequi voluptatibus quis qui, id cupiditate culpa
                    laborum numquam odio modi tenetur cumque aspernatur,
                    pariatur doloribus sed, voluptatem delectus in! Perferendis
                    aut facilis amet similique perspiciatis optio excepturi, ex
                    sint deserunt delectus incidunt nisi eos fugit earum aliquid
                    sunt quasi eius.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-5"
                  className="w-full rounded-3xl border-0 bg-accordionBg px-4 text-white lg:rounded-[32px]"
                >
                  <AccordionTrigger className="w-full text-left font-dmSans text-[20px] no-underline hover:no-underline 2xl:text-[25px]">
                  Is Kratom Addictive?
                  </AccordionTrigger>
                  <AccordionContent className="text-[16px] 2xl:text-[18px]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Consectetur sequi voluptatibus quis qui, id cupiditate culpa
                    laborum numquam odio modi tenetur cumque aspernatur,
                    pariatur doloribus sed, voluptatem delectus in! Perferendis
                    aut facilis amet similique perspiciatis optio excepturi, ex
                    sint deserunt delectus incidunt nisi eos fugit earum aliquid
                    sunt quasi eius.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="bg-img hidden items-center justify-end lg:flex lg:w-[40%]">
            <img
              src="/assets/images/leaves.png"
              alt="leaves"
              className=" w-[70%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
