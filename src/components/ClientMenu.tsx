"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import Link from "next/link";


const ClientMenu = () => {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList className="gap-4">
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="font-dmSans text-[20px] font-normal hover:text-primary"
          >
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="font-dmSans text-[20px] font-normal hover:text-primary"
          >
            <Link href="/about-us">About Us</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="font-dmSans text-[20px] font-normal hover:text-primary"
          >
            <Link href="/shop">Shop</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger className="p-0 font-dmSans text-[20px] font-normal hover:bg-transparent hover:text-primary focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
            <NavigationMenuLink href="/shop">Our Products</NavigationMenuLink>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="min-w-[350px]">
            <ul className="grid gap-3 p-4">
              {props.menuLinks.map((link: any) => (
                <li className="row-span-3" key={link.id}>
                  <NavigationMenuLink
                    href={`/shop/${link.slug}`}
                    className="font-dmSans text-[20px] font-normal hover:text-primary"
                  >
                    {link.category_name}
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="font-dmSans text-[20px] font-normal hover:text-primary"
          >
            <Link href="/contact-us">Contact Us</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default ClientMenu;
