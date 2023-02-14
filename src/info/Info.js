import React from 'react';
import Banner from '../global/Banner';
import './Info.css';
import bgInfo from '../img/banners/bg-info.jpg';

const Info = () => {
  return (
    <div>
      <Banner
        image={bgInfo}
        hx="h1"
        fontSize="60"
        color="#ffffff"
        content=""
        text="Informações"
      />
    </div>
  );
};

export default Info;
