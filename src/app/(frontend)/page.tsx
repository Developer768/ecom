import Categories from "@/components/Categories";
import FAQ from "@/components/FAQ";
import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import LinkButton from "@/components/customUI/LinkButton";
import { db } from "@/server/db";
import React from "react";

const HomePage = async () => {
  // const capsulesProducts = await db.productCategory.findMany({
  //   include:{
  //     products:true,
  //   },
  //   where:{
  //     slug: "kratom-capsule",
  //   },
  //   take: 4,
  // })
  const capsulesProducts = await db.products.findMany({
    include: {
      category: true,
    },
    where: {
      category: {
        slug: "kratom-capsule",
      },
    },
    orderBy: {
      createdAt: 'desc', // 'desc' for descending order (latest first), 'asc' for ascending order
    },
    take: 4,
  });
  const liquidShotProducts = await db.products.findMany({
    include: {
      category: true,
    },
    where: {
      category: {
        slug: "kratom-liquid-shot",
      },
    },
    orderBy: {
      createdAt: 'desc', // 'desc' for descending order (latest first), 'asc' for ascending order
    },
    take: 4,
  });
  const powderProducts = await db.products.findMany({
    include: {
      category: true,
    },
    where: {
      category: {
        slug: "kratom-powder",
      },
    },
    orderBy: {
      createdAt: 'desc', // 'desc' for descending order (latest first), 'asc' for ascending order
    },
    take: 4,
  });
  // console.log(capsulesProducts)
  return (
    <div>
      <Hero />
      <Categories />

      {/* What is Kratom */}
      <section className="what-is-kratom ">
        <div className="width grid  grid-cols-1 rounded-b-3xl lg:grid-cols-2">
          <div className="img -mt-[40px]  flex justify-center rounded-[24px] lg:-mt-[80px] 2xl:justify-end ">
            <img
              src="/assets/images/powder-bowel.png"
              alt="Powder"
              className="rounded-[24px] object-cover"
            />
          </div>
          <div className="content rounded-b-[24px] bg-greyishGreen  p-4 md:p-[25px] lg:p-[50px] 3xl:px-[70px] ">
            <h2 className="section-heading salome-small mb-[20px] text-white 3xl:mb-[55px] ">
              What is Kratom?
            </h2>
            <p className="mb-[15px] font-dmSans text-[16px] text-white md:text-[18px]   lg:mb-[24px] lg:text-[22px] 3xl:mb-[34px]">
              Kratom, scientifically known as Mitragyna speciosa, is a tropical
              evergreen tree native to Southeast Asia, particularly Indonesia,
              Malaysia, Thailand, and Papua New Guinea. It belongs to the coffee
              family and has been traditionally used for centuries in the region
              for its potential medicinal properties.
            </p>
            <p className="mb-[15px] font-dmSans text-[16px] text-white md:text-[18px]   lg:mb-[24px] lg:text-[22px] 3xl:mb-[34px]">
              Kratom leaves contain active compounds, including alkaloids such
              as mitragynine and 7-hydroxymitragynine, which interact with
              receptors in the brain, producing various effects. Depending on
              the strain and dosage, kratom can have stimulating or sedating
              properties, and it is commonly used for relaxation, mood
              enhancement, pain relief, and as an energy booster.
            </p>
            <LinkButton
              href="/shop"
              // className="rounded-full bg-white text-green hover:bg-primary hover:text-white"
              className="rounded-full bg-white border border-white text-green px-6 py-6 text-[16px] hover:text-white lg:text-[20px]"
            >
              Shop Now {"->"}
            </LinkButton>
          </div>
        </div>
      </section>
      <div className="xl:pt-[30px]">

      <FeaturedProducts
        data={capsulesProducts}
        link="/shop/kratom-capsule"
        title="Kratom Capsules"
        />
        </div>
      <div className="xl:pb-[60px]">
        <FeaturedProducts
          data={liquidShotProducts}
          link="/shop/kratom-liquid-shot"
          title="Kratom Liquid Shot"
        />
      </div>

      {/* Over the Last year */}
      <section className="bg-[url('/assets/images/leaves-bg.png')] bg-cover bg-center py-[50px] lg:py-[86px] xl:flex xl:max-h-[678px] xl:items-center xl:justify-center 2xl:py-[162px]">
        <div className="width px-4 py-4 3xl:px-0">
          <h2 className="sec-heading salome-large mb-[16px] text-center text-white lg:mb-[22] 2xl:mb-[27px]">
            Over the last year
          </h2>
          <p className="mx-auto mb-[32px] max-w-[500px] text-center font-dmSans text-[18px] text-white lg:mb-[52] lg:max-w-[600px] xl:text-[22px] 2xl:mb-[112px] 2xl:max-w-[820px]">
            Over the last year, PaylessKratom has grown to be a tried and
            trusted source of Kratom capsules, powders, liquids, and Gummies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <LinkButton
              href="/shop"
              className="rounded-full border border-white bg-transparent px-6 py-6 text-[16px] text-white lg:text-[20px]"
            >
              See Products
            </LinkButton>
            <LinkButton
              href="/shop"
              className="rounded-full px-6 py-6   text-[16px] text-white lg:text-[20px]"
            >
              Shop Now
            </LinkButton>
          </div>
        </div>
      </section>
      <div className="xl:pb-[60px]">
        <FeaturedProducts
          data={powderProducts}
          link="/shop/kratom-powder"
          title="Kratom Powder"
        />
      </div>
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default HomePage;
