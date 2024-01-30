"use client";
import { Icons } from "@/lib/Icons";
import React, { useState } from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import Link from "next/link";

const ClientMobileHeader = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      {/* <button className="menu-icon flex items-center justify-center p-0" onClick={()=>{setIsOpen(true)}}>
        <Icons.Menu className="h-[32px] w-[32px]" />
        </button> */}
      <Sheet>
        <SheetTrigger className="flex items-center justify-center">
          <Icons.Menu className="h-[32px] w-[32px]" />
        </SheetTrigger>
        <SheetContent>
          <NavigationMenu className="mt-6 w-full">
            <NavigationMenuList className="flex flex-col items-start  justify-center gap-4 space-x-0">
              <NavigationMenuItem>
                <SheetClose asChild>
                  <NavigationMenuLink
                    className="font-dmSans text-[20px] font-normal hover:text-primary"
                    asChild
                  >
                    <Link href={"/"}>Home</Link>
                  </NavigationMenuLink>
                </SheetClose>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <SheetClose asChild>
                  <NavigationMenuLink
                    asChild
                    className="font-dmSans text-[20px] font-normal hover:text-primary"
                  >
                    <Link href="/about-us">About Us</Link>
                  </NavigationMenuLink>
                </SheetClose>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <SheetClose asChild>
                  <NavigationMenuLink
                    asChild
                    className="font-dmSans text-[20px] font-normal hover:text-primary"
                  >
                    <Link href="/shop">Shop</Link>
                  </NavigationMenuLink>
                </SheetClose>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <SheetClose asChild>
                  <NavigationMenuLink
                    asChild
                    className="font-dmSans text-[20px] font-normal hover:text-primary"
                  >
                    <Link href="/contact-us">Contact Us</Link>
                  </NavigationMenuLink>
                </SheetClose>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ClientMobileHeader;
