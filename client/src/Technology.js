import React, { useEffect } from 'react';
import HeroTech from "./technology/HeroTech";
import UsedTech from "./technology/UsedTech";

const Technology = () => {

  useEffect(() =>{
    window.scrollTo(0, 0);
  });

  return (
    <>
      <HeroTech />
      <UsedTech />
    </>
  );
};

export default Technology;