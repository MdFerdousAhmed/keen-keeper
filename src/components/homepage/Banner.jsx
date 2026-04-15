import React from 'react';
import { FaPlus } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="hero bg-base-200 p-10">
      <div className="hero-content text-center">
        <div>
          <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
          <p className="py-6">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.
          </p>
          <button className="btn bg-[#244D3F] text-white"><FaPlus /> Add a Friend</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;