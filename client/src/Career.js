import React, { useEffect } from 'react';
import HeroCareer from './career/HeroCareer';
import Benefits from './career/Benefits';
import Process from './career/Process';
import Jobs from './career/Jobs';


const Career = () => {

  useEffect(() =>{
    window.scrollTo(0, 0);
  });

  return (
    <>
      <HeroCareer />
      <Benefits />
      <Process />
      <Jobs />
    </>
  );
};

export default Career;