'use client';

import React, { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SIDENAV_ITEMS } from '@/lib/constants';
import { SideNavItem } from '@/types';
import { Icons } from '@/lib/Icons';
import Image from 'next/image';
import { webConfig } from '@/lib/webConfig';
import { signOut } from 'next-auth/react';

const SideNav = () => {
  return (
    <div className="md:w-60 bg-white h-screen flex-1 fixed border-r border-zinc-200 hidden md:flex">
      <div className="flex flex-col space-y-6 w-full">
        <Link
          href="/"
          className="flex flex-row  items-center justify-center md:justify-start md:px-6 border-b border-zinc-200 h-12 w-full"
        >
            <Image src={webConfig.logoDark.src} alt={webConfig.logoDark.alt} width={150} height={30} />
        </Link>

        <div className="flex flex-col space-y-2  md:px-6 ">
          {SIDENAV_ITEMS.map((item, idx) => {
            return <MenuItem key={idx} item={item} />;
          })}
          <div
          className={`flex flex-row space-x-4 items-center py-1 px-2 rounded-lg hover:bg-zinc-100 cursor-pointer`}
          onClick={() => {
            signOut()
          }}
        >
          <Icons.LogOut className="w-6 h-6" />
          <span className="font-semibold text-lg flex">Logout</span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;

const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div className="">
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex flex-row items-center py-1 px-2 rounded-lg hover-bg-zinc-100 w-full justify-between hover:bg-zinc-100 ${
              pathname.includes(item.path) ? 'bg-zinc-100' : ''
            }`}
          >
            <div className="flex flex-row space-x-4 items-center">
              {item.icon}
              <span className="font-semibold text-lg  flex">{item.title}</span>
            </div>

            <div className={`${subMenuOpen ? 'rotate-180' : ''} flex`}>
              <Icons.ChevronDown className='h-6 w-6' />
            </div>
          </button>

          {subMenuOpen && (
            <div className="my-1 ml-12 flex flex-col space-y-2">
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={`${
                      subItem.path === pathname ? 'font-bold' : ''
                    }`}
                  >
                    <span>{subItem.title}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          className={`flex flex-row space-x-4 items-center py-1 px-2 rounded-lg hover:bg-zinc-100 ${
            item.path === pathname ? 'bg-zinc-100' : ''
          }`}
        >
          {item.icon}
          <span className="font-semibold text-lg flex">{item.title}</span>
        </Link>
      )}
    </div>
  );
};