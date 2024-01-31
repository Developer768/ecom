import LinkButton from "@/components/customUI/LinkButton";
import React from "react";

const AboutUsPage = () => {
  return (
    <div>
      <section className="header -mt-[1px] flex h-[200px] items-center justify-center bg-[url('/assets/images/leaves-bg.png')] bg-cover bg-center lg:h-[280px]  3xl:h-[347px]">
        <h3 className="salome-large text-white">About Us</h3>
      </section>

      <section className="what-is-kratom bg-white 3xl:border-b-[120px] 3xl:border-b-green 2xl:border-b-[120px] 2xl:border-b-green xl:border-b-[120px] xl:border-b-green  lg:border-b-[120px] lg:border-b-green">
        <div className="width px-4 py-[38px] lg:py-[58px] xl:py-[80px] 3xl:px-0 3xl:py-[110px]">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:gap-[50px] 3xl:gap-[100px]">
            <div className="heading ">
              <h3 className="salome-small text-black">What is Kratom?</h3>
            </div>
            <div className="max-w-[1098px]">
              <p className="mb-[16px] font-dmSans text-[16px] text-black lg:mb-[36px] lg:text-[18px] 3xl:mb-[50px] 3xl:text-[22px]">
                Kratom, scientifically known as Mitragyna speciosa, is a
                tropical evergreen tree native to Southeast Asia, particularly
                Indonesia, Malaysia, Thailand, and Papua New Guinea. It belongs
                to the coffee family and has been traditionally used for
                centuries in the region for its potential medicinal properties.
              </p>
              <p className="mb-[16px] font-dmSans text-[16px] text-black lg:mb-[36px] lg:text-[18px] 3xl:mb-[50px] 3xl:text-[22px]">
                Kratom leaves contain active compounds, including alkaloids such
                as mitragynine and 7-hydroxymitragynine, which interact with
                receptors in the brain, producing various effects. Depending on
                the strain and dosage, kratom can have stimulating or sedating
                properties, and it is commonly used for relaxation, mood
                enhancement, pain relief, and as an energy booster.
              </p>
              <p className="font-dmSans text-[16px] text-black lg:text-[18px] 3xl:text-[22px] ">
                Kratom is available in different forms, including dried and
                powdered leaves, capsules, extracts, and as an ingredient in
                various products such as teas, edibles, and liquid shots.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white width  relative lg:-mb-[120px] 3xl:border-t-[120px] 3xl:border-t-white 2xl:border-t-[120px] 2xl:border-t-white xl:border-t-[120px] xl:border-t-white lg:border-t-[80px] lg:border-t-white">
          {/* <div className="bg-white lg:border-y-[120px] lg:border-t-white lg:border-b-green"> */}
          <div className="flex flex-col lg:flex-row">
            <div className="img  lg:w-[60%]  2xl:w-[80%] lg:absolute bottom-0">
              <img
                src="/assets/images/kratom-capsules-col.png"
                alt="Kratom CAPSULESt"
                className="object-cover"
              />
            </div>
            <div className="content  z-[10] flex flex-col justify-center rounded-tl-[50px] bg-darkGreen px-4 py-4 sm:p-6 md:p-10 lg:ml-auto lg:w-[50%] xl:p-[50px]">
              <h3 className="salome-small mb-[20px] text-white xl:mb-[40px]">
                Kratom Capsule
              </h3>
              <p className="mb-[18px] text-[16px] text-white lg:text-[18px] xl:mb-[34px] 2xl:text-[22px]">
                Kratom extract capsules offer a convenient and potent way to
                experience the benefits of kratom. Kratom, derived from the
                Mitragyna speciosa plant, has gained significant popularity due
                to its potential to promote relaxation, mood enhancement, and
                overall well-being. Extract capsules take kratom a step further,
                providing a concentrated form of the plant’s beneficial
                alkaloids. In this article, we will explore the potential
                benefits of kratom extract capsules, their convenience, the
                strength of extracts, and some major kratom brands that offer
                these products.
              </p>
              <LinkButton
                href={"/shop/kratom-liquid-shot"}
                className="w-fit rounded-full 2xl:p-6 2xl:text-[22px]"
              >
                Shop Now {" ->"}
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      <section className="cats bg-green py-[36px] lg:py-[54px] 3xl:py-[110px]">
        <div className="width px-4 py-4 3xl:px-0">
          <div className="flex flex-col gap-5 md:flex-row">
            <div className="content flex flex-col justify-center md:w-[50%] xl:pr-[50px]">
              <h3 className="salome-small mb-[20px] text-white xl:mb-[40px]">
                Kratom Gummies
              </h3>
              <p className="mb-[18px] text-[16px] text-white lg:text-[18px] xl:mb-[34px] 2xl:text-[22px]">
                Delightful, Convenient and a Delicious Alternative.
              </p>
              <p className="mb-[18px] text-[16px] text-white lg:text-[18px] xl:mb-[34px] 2xl:text-[22px]">
                Kratom edibles are products that incorporate kratom extract or
                powder into a consumable form, making it more palatable and
                enjoyable for users. Among the various types of kratom edibles,
                gummies have gained significant popularity due to their
                convenience, discreetness, and delightful flavors.
              </p>
              <LinkButton
                href={"/shop/kratom-gummies"}
                className="w-fit rounded-full bg-white text-green hover:bg-primary hover:text-white 2xl:p-6 2xl:text-[22px]"
              >
                Shop Now {" ->"}
              </LinkButton>
            </div>
            <div className="img  md:w-[50%]">
              <img
                src="/assets/images/kratom-gummies-col.png"
                alt="Kratom Gummies"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="cats py-[36px] lg:py-[54px] 3xl:py-[110px]">
        <div className="width mb-4 px-4 py-4 md:mb-[54px] 3xl:px-0 ">
          <div className="flex flex-col gap-5 md:flex-row">
            <div className="img  md:w-[50%]">
              <img
                src="/assets/images/kratom-liquid-shot-col.png"
                alt="Kratom Liquid Shot"
                className="object-cover"
              />
            </div>
            <div className="content flex flex-col justify-center md:w-[50%] xl:pl-[50px]">
              <h3 className="salome-small mb-[20px] text-black xl:mb-[40px]">
                Kratom Liquid Shot
              </h3>
              <p className="mb-[18px] text-[16px] text-black lg:text-[18px] xl:mb-[34px] 2xl:text-[22px]">
                Kratom liquid shots have gained popularity as a convenient and
                potent way to consume kratom. These ready-to-drink shots offer a
                quick and easy method of incorporating kratom into your daily
                routine. Payless Kratom carries the most extensive kratom liquid
                shots available.
              </p>
              <LinkButton
                href={"/shop/kratom-liquid-shot"}
                className="w-fit rounded-full 2xl:p-6 2xl:text-[22px]"
              >
                Shop Now {" ->"}
              </LinkButton>
            </div>
          </div>
        </div>
        <div className="width px-4 py-4 3xl:px-0">
          <div className="flex flex-col gap-5 md:flex-row">
            <div className="content flex flex-col justify-center md:w-[50%] xl:pr-[50px]">
              <h3 className="salome-small mb-[20px] text-black xl:mb-[40px]">
                Kratom Powder
              </h3>
              <p className="mb-[18px] text-[16px] text-black lg:text-[18px] xl:mb-[34px] 2xl:text-[22px]">
                Kratom extract powder is a concentrated form of kratom that
                undergoes an extraction process to isolate and extract the
                active alkaloids from the kratom leaves. This results in a more
                potent product compared to traditional kratom powder. The
                extract powder is typically finely ground and may have a more
                intense aroma and taste than regular kratom powder.
              </p>
              <LinkButton
                href={"/shop/kratom-powder"}
                className="w-fit rounded-full 2xl:p-6 2xl:text-[22px]"
              >
                Shop Now {" ->"}
              </LinkButton>
            </div>
            <div className="img  md:w-[50%]">
              <img
                src="/assets/images/kratom-powder-col.png"
                alt="Kratom Liquid Shot"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
