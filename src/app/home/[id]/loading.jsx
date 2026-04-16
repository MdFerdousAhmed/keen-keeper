import React from 'react';
import { RingLoader } from 'react-spinners';

const loading = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <RingLoader color="#244D3F" />
    </div>
  );
};

export default loading;