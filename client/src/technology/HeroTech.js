import React from 'react';
import tech from "../images/tech1.png";
import "./tech.scss";


const HeroTech = () => {
  return(
    <div className="hero_tech">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="order-2 order-md-1 mt-5 mt-md-0 col-10 col-md-4">
            <h2 className="">We use up to date technologies</h2>
          </div>
          <div className="order-1 order-md-2 col-10 col-md-8">
            <img src={tech} alt="technologies"/>
          </div>
        </div>
      </div>
    </div>
  );
};


export default HeroTech;