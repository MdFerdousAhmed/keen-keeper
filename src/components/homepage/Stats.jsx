import React from 'react';

const Stats = ({app}) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 p-10'>
      <div className='grid justify-center items-center text-center shadow-lg p-8 rounded-b-lg'>
        <h1 className='font-semibold text-2xl'>{}app.length</h1>
        <p className='text-gray-700'>Total Friends</p>
      </div>
      <div className='grid justify-center items-center text-center shadow-lg p-8 rounded-b-lg'>
        <h1 className='font-semibold text-2xl'>0</h1>
        <p className='text-gray-700'>Total Friends</p>
      </div>
      <div className='grid justify-center items-center text-center shadow-lg p-8 rounded-b-lg'>
        <h1 className='font-semibold text-2xl'>0</h1>
        <p className='text-gray-700'>Total Friends</p>
      </div>
      <div className='grid justify-center items-center text-center shadow-lg p-8 rounded-b-lg'>
        <h1 className='font-semibold text-2xl'>0</h1>
        <p className='text-gray-700'>Total Friends</p>
      </div>
      
      
    </div>
  );
};

export default Stats;