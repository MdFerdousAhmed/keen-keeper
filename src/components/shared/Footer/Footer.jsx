import Image from 'next/image';
import React from 'react';
import FooterImg from "@/assets/logo-xl.png"
import InstagramImg from "@/assets/instagram.png"
import FacebookImg from "@/assets/facebook.png"
import TwitterImg from "@/assets/twitter.png"

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#244D3F] p-10 ">
      <aside>
        <Image src={FooterImg} alt="" ></Image>
        <p className="text-gray-300">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <p className='text-2xl text-white'>Social Links</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <Image src={InstagramImg} alt=''></Image>
          </a>
          <a>
            <Image src={FacebookImg} alt=''></Image>
          </a>
          <a>
            <Image src={TwitterImg} alt=''></Image>
          </a>
        </div>
      </nav>
      <div className=' border-t border-gray-400 flex justify-between mb-4 text-gray-300 pb-8'>
        <div>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>

        </div>
        <div className='ml-100'>
          <ul className='flex gap-6'>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookies</li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;