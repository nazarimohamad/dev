import React from 'react';
// import trianble from "../images/trianble.png"
import "../style.scss";


const Hero = () => {
  return (
    <div className="hero">
      <div className="circle"></div>
      <div className="text">
        <h2>We provide the most <span className="text-info">advance digital solutions</span> to solve real business problems.</h2>
      </div>
    </div>
  );
};

export default Hero;