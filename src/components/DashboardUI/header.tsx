"use client";
import React from "react";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import useScroll from "@/hooks/useScroll";
import { cn } from "@/lib/utils";
import { webConfig } from "@/lib/webConfig";
import Image from "next/image";

const Header = ({session}:{session:any}) => {
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
          <div className="flex gap-3 items-center justify-center rounded-full ">
            {
              session ? (
                <>
                <Image src={session.user.avatar} alt="Avatar" width={32} height={32} className="rounded-full" />
                <span className="font-bold">{session.user.name}</span>
                </>
              ) : (
                <span className="h-8 w-8 text-center font-bold">Name</span>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
