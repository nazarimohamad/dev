import React, { useEffect } from "react";
import Hero from "./home/Hero";
import Product from "./home/Product";
import Review from "./home/Review";
import Contact from "./Contact";
import HeroTech from "./technology/HeroTech";
import UsedTech from "./technology/UsedTech";

const Home = () => {

  useEffect(() =>{
    window.scrollTo(0, 0);
  });

  return(
    <>
      <Hero />
      <Product />
      {/* <HeroTech /> */}
      <UsedTech />
      <Review />
      <Contact />
    </>
  );
};

export default Home