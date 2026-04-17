
import React from 'react';
import TrendingApps from '@/components/homepage/HomeApp';
import Banner from '@/components/homepage/Banner';

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <TrendingApps></TrendingApps>
    </div>
  );
};

export default HomePage;