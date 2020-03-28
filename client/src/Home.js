import React, { useEffect } from "react";
import Hero from "./home/Hero";
import Product from "./home/Product";
import Review from "./home/Review";
import Contact from "./Contact";

const Home = () => {

  useEffect(() =>{
    window.scrollTo(0, 0);
  });

  return(
    <>
      <Hero />
      <Product />
      <Review />
      <Contact />
    </>
  );
};

export default Home