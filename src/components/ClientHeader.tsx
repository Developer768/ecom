import Link from "next/link";
import React from "react";
import { Icons } from "@/lib/Icons";
import LinkButton from "./customUI/LinkButton";
import { db } from "@/server/db";
import ClientMenu from "./ClientMenu";
import ClientMobileHeader from "./ClientMobileHeader";
import HearderCartIcon from "./HearderCartIcon";

const ClientHeader = async () => {
  return (
    <header className="width   flex items-center justify-between border-b border-b-black px-4 py-4 3xl:px-0">
      <div className="logo w-fit">
        <Link href={"/"}>
          <img
            src="/assets/images/dark_logo.png"
            alt="Kratom"
            className="w-[150px] max-w-[250px] md:w-[200px] xl:w-[250px] "
          />
        </Link>
      </div>
      <div className="menu-options flex items-center gap-6">
        {/* Menu */}
        <div className="menu">
          <ClientMenu  />
        </div>

        {/* Shop Now Button */}
        <div className="shop-now-btn hidden sm:block">
          <LinkButton href="/shop" className="rounded-full text-[18px] font-normal">
            Shop Now
          </LinkButton>
        </div>
        {/* Cart Icon */}
        <HearderCartIcon />
        {/* Mobile Menu Icon */}
        <div className="mobile-menu cursor-pointer lg:hidden">
          {/* <Icons.Menu className="h-[32px] w-[32px]" /> */}
          <ClientMobileHeader />
        </div>
      </div>
    </header>
  );
};

export default ClientHeader;
