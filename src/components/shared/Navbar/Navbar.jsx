import Image from 'next/image';
import React from 'react';
import logoImg from "@/assets/logo.png"
import MyLink from './MyLink';
import Link from 'next/link';


const Navbar = () => {

  const navItems = [
    {
      path: "/",
      text: "Home",
    },
     {
      path: "/timeline",
      text: "Timeline",
    },
    {
      path: "/stats",
      text: "Stats",
    },
   
  ];

  return (
     <nav className=" shadow">
      <div className="flex justify-between gap-4 items-center  p-4 container mx-auto">
        <Image
          src={logoImg}
          alt="PH play store logo"
          className="w-[] h-[] font-bold"
        />

        <ul className="flex justify-between gap-4 items-center">
          {navItems.map((item, index) => (
            // client component
            <MyLink key={index} href={item.path}>
              {item.text}
            </MyLink>
          ))}

          
          {/* <li>
            <Link to={"/"} href={home}>Home</Link>
          </li>
          <li>
            <Link to={"/timeline"} href={timeline}>Timeline</Link>
          </li>
          <li>
            <Link to={"/stats"} href={stats}>Stats</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;