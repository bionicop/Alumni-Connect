import React from 'react';
import Carousel from '../../components/carousel/Carousel';
import Alumni from "../alumni/Alumni";

const Home = () => {
  const images = [
    require("../../assets/noida-bg-1.jpg"),
    require("../../assets/noida-bg-2.jpg"),
    require("../../assets/noida-bg-3.jpg"),
    require("../../assets/noida-bg-4.jpg"),
    require("../../assets/noida-bg-5.jpg"),
  ];

  return (
    <div className="home">
      <div className="start">
        <h1>Welcome to BITMAA</h1>
        <h2>(Birla Institute of Technology Mesra Alumni Association)</h2>
        <Carousel images={images} />
        <Alumni />
        
      </div>
    </div>
  );
};

export default Home;
