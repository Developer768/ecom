import Link from "next/link";
import React from "react";
import FooterForm from "./FooterForm";

const Footer = () => {
  return (
    <footer id="footer" className=" bg-green w-full  font-dmSans text-white">
      <div className="width">
        {/* Footer */}
        <div className="footer 3xl:px-0 flex flex-col gap-8 px-4 py-8 lg:pt-10 3xl:pt-24 md:flex-row md:flex-wrap md:justify-between">
          {/* Info */}
          <div className="info min-w-[320px]">
            <div className="mb-[30px] w-fit">
              <Link href={"/"}>
                <img
                  src="/assets/images/whiteLogo.png"
                  alt="Kratom"
                  className="3xl:w-[250px] 4xl:w-[250px] w-[200px] max-w-[250px] md:w-[200px] xl:w-[250px] 2xl:w-[250px]"
                />
              </Link>
            </div>
            <div className="contact flex flex-col gap-3">
              <div className="phone-contact flex items-center gap-3">
                <div className="icon bg-greyishGreen flex aspect-square w-[44px] items-center justify-center rounded-full">
                  <img src="/assets/svgs/phone-icon.svg" alt="phone" />
                </div>
                <p className="w-fit font-dmSans text-[18px] hover:text-primary">
                  <Link href={"#"}>(+1) 000 000 0000</Link>
                </p>
              </div>
              <div className="email-contact flex items-center gap-3">
                <div className="icon bg-greyishGreen flex aspect-square w-[44px] items-center justify-center rounded-full">
                  <img src="/assets/svgs/mail-icon.svg" alt="mail" />
                </div>
                <p className="w-fit font-dmSans text-[18px] hover:text-primary">
                  <Link href={"#"}>kratom@gmail.com</Link>
                </p>
              </div>
              <div className="location-contact flex items-center gap-3">
                <div className="icon bg-greyishGreen flex aspect-square w-[44px] items-center justify-center rounded-full">
                  <img src="/assets/svgs/location-icon.svg" alt="location" />
                </div>
                <p className="w-fit font-dmSans text-[18px] hover:text-primary">
                  <Link href={"#"}>
                    Lorem Ipsum is simply dummy text of the printing
                  </Link>
                </p>
              </div>
            </div>
          </div>
          {/* Quick Links */}
          <div className="quick-links min-w-[280px]">
            <h3 className="mb-[30px] text-[24px] text-primary">Quick Links</h3>
            <div className="links flex flex-col gap-3">
              <p className="w-fit text-[18px] text-white hover:text-primary">
                <Link href={"/"}>Home</Link>
              </p>
              <p className="w-fit text-[18px] text-white hover:text-primary">
                <Link href={"/about-us"}>About Us</Link>
              </p>
              <div className="socials flex items-center gap-3">
                <Link href={"#"}>
                  <div className="icon bg-greyishGreen flex aspect-square w-[44px] items-center justify-center rounded-full">
                    <img src="/assets/svgs/facebook-icon.svg" alt="facebook" />
                  </div>
                </Link>
                <Link href={"#"}>
                  <div className="icon bg-greyishGreen flex aspect-square w-[44px] items-center justify-center rounded-full">
                    <img
                      src="/assets/svgs/instagram-icon.svg"
                      alt="instagram"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* Our Products */}
          <div className="our-products min-w-[280px]">
            <h3 className="mb-[30px] text-[24px] text-primary">Our Products</h3>
            <div className="links flex flex-col gap-3">
              <p className="w-fit text-[18px] text-white hover:text-primary">
                <Link href={"/shop/kratom-capsule"}>Kratom Capsule</Link>
              </p>
              <p className="w-fit text-[18px] text-white hover:text-primary">
                <Link href={"/shop/kratom-gummies"}>Kratom Gummies</Link>
              </p>
              <p className="w-fit text-[18px] text-white hover:text-primary">
                <Link href={"/shop/kratom-liquid-shot"}>
                  Kratom Liquid Shot
                </Link>
              </p>
              <p className="w-fit text-[18px] text-white hover:text-primary">
                <Link href={"/shop/kratom-powder"}>Kratom Powder</Link>
              </p>
            </div>
          </div>
          {/* Join Our Community */}
          <div className="join-our-community min-w-[320px] md:w-[768px] 2xl:w-[600px]">
          <h3 className="mb-[30px] text-[24px] text-primary">Join Our Community</h3>
          <p className="w-fit text-[18px] text-white ">Become a valued member of our community and unlock a world of inspiration, latest updates and exclusive rewards.</p>
          <FooterForm />
          </div>
        </div>
        {/* Copyrights */}
        <div className="copyrights 3xl:px-0 flex flex-col items-center justify-center gap-2 border-t border-t-white px-4 py-4 md:flex-row md:justify-between">
          <ul className="flex flex-col items-center md:flex-row md:gap-4">
            <li className="w-fit ">
              <Link
                href={"/terms-of-services"}
                className="text-[16px] leading-tight hover:text-primary"
              >
                Terms of Services
              </Link>
            </li>
            <li className="w-fit ">
              <Link
                href={"/terms-and-conditions"}
                className="text-[16px] leading-tight hover:text-primary"
              >
                Terms and Conditions
              </Link>
            </li>
            <li className="w-fit ">
              <Link
                href={"/privacy-policy"}
                className="text-[16px] leading-tight hover:text-primary"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
          <p className="font-dmSans text-[16px]">
            © 2023 All Right Reserved by Kratom
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
