"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyLink = ({href, children}) => {

  const pathname = usePathname();
  console.log(pathname, "pathname")
  return (
    <div>
      <Link  href={href} className={` font-semibold ${pathname === href ? "bg-[#244D3F] rounded-md p-2 text-white font-semibold": ""}`}>
              {children}
            </Link>
    </div>
  );
};

export default MyLink;