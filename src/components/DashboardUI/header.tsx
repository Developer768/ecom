"use client";
import React from "react";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import useScroll from "@/hooks/useScroll";
import { cn } from "@/lib/utils";
import { webConfig } from "@/lib/webConfig";
import Image from "next/image";

const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();
  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full border-b transition-all`,
        {
          "border-b  bg-white/75 backdrop-blur-lg": scrolled,
          "border-b  bg-white": selectedLayout,
        },
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex flex-row items-center justify-center space-x-3 md:hidden "
          >
            <Image src={webConfig.logoDark.src} alt={webConfig.logoDark.alt} width={150} height={30} />
            {/* <span className="flex text-xl font-bold ">{webConfig.name || "Dashboard"}</span> */}
          </Link>
        </div>

        <div className="hidden md:block">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-300 text-center">
            <span className="text-sm font-semibold">HQ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
