import React from 'react';
import { FiBook } from 'react-icons/fi';
import { GiWatch, GiSofa } from 'react-icons/gi';
import { AiOutlineHome } from 'react-icons/ai';
import { IoIosLaptop, IoLogoGameControllerA } from 'react-icons/io';

const Benefits = () => {
  return (
    <div className="benefits">
      <div className="container text-center d-flex flex-column justify-content-around">
        <div className="benefits_text mb-3">
          <h2>Working with bteks comes with great perks</h2>
          <p>Being a developer is not only about coding. It’s about evolving your passion.</p>
        </div>
        <div className="benefits_option mt-3 d-flex justify-content-between">
          {items.map((item, idx)=> {
            return (
              <div key={idx} className="item">
                <span>{item.icon}</span>
                <h5 className="my-4">{item.title}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Benefits;


const items = [
  {icon: <GiWatch style={{width:"3rem", height:"3rem", color:"#32a2b8"}}/> ,title: "Flexible Hours"},
  {icon: <IoIosLaptop style={{width:"3rem", height:"3rem", color:"#32a2b8"}}/>, title: "Pro Tools"},
  {icon: <IoLogoGameControllerA style={{width:"3rem", height:"3rem", color:"#32a2b8"}}/>, title: "Gaming"},
  {icon: <AiOutlineHome style={{width:"3rem", height:"3rem", color:"#32a2b8"}}/>, title: "Remote Friendly"},
  {icon: <GiSofa style={{width:"3rem", height:"3rem", color:"#32a2b8"}}/>, title: "Cozy Studio"},
  {icon: <FiBook style={{width:"3rem", height:"3rem", color:"#32a2b8"}}/>, title: "Training Material"},
]