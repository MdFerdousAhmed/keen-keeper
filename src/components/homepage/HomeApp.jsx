
import React from "react";
import HomeCard from "../ui/HomeCard";


const appsPromise = async function () {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  return data;
};

const TrendingApps = async () => {
  const apps = await appsPromise();


  // console.log(from, "from");

  return (
    <div className="container mx-auto">
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 p-10'>
        <div className='grid justify-center items-center text-center shadow-lg p-8 rounded-b-lg'>
          <h1 className='font-semibold text-2xl'>{apps.length }</h1>
          <p className='text-gray-700'>Total Friends</p>
        </div>
        <div className='grid justify-center items-center text-center shadow-lg p-8 rounded-b-lg'>
          <h1 className='font-semibold text-2xl'>{apps.length }</h1>
          <p className='text-gray-700'>On Track</p>
        </div>
        <div className='grid justify-center items-center text-center shadow-lg p-8 rounded-b-lg'>
          <h1 className='font-semibold text-2xl'>{apps.length }</h1>
          <p className='text-gray-700'>Need Attention</p>
        </div>
        <div className='grid justify-center items-center text-center shadow-lg p-8 rounded-b-lg'>
          <h1 className='font-semibold text-2xl'>{apps.length }</h1>
          <p className='text-gray-700'>Interactions This Month</p>
        </div>


      </div>
      <h2 className="text-2xl font-semibold pl-10">Your Friends</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-10">

        {
          apps.map(app => <div key={app.id} >
            <HomeCard app={app}></HomeCard>

          </div>)
        }

      </div>
    </div>
  );
};

export default TrendingApps;
