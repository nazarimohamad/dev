import React from 'react';
import { FaPhp, FaLaravel, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaAngular, FaReact, FaVuejs, FaGit } from "react-icons/fa";
import { DiMongodb, DiJavascript1 } from "react-icons/di";
import university from "../images/university.png";
import video from "../images/video.png";
import store from "../images/store.png";
import startup from "../images/startup.png";
import realestate from "../images/realestate.png";
import marketing from "../images/marketing.png";
import laptop from "../images/laptop.png";
import insta from "../images/insta.png";
import health from "../images/health.png";
import exchange from "../images/exchange.png";
import airplane from "../images/airplane.png";



const UsedTech = () => {
  return (
    <div className="tech mt-5">
      <div className="container">
        <div className="tech">
          <div className="row justify-content-center">
            <div className="text-center mt-5">
              <h2>Technologies We Use</h2>
              <p>Our technology stack is tested and safe,
                corresponding with the latest trends in web development.</p>
            </div>
          </div>
          <div className="items mt-5 d-flex flex-wrap justify-content-around">
            {items.map((item, idx) => {
              return (
                <div className="item my-3 my-md-5 mx-3 py-4 px-5">
                  <span>{item.icon}</span>
                  <h6 className="text-uppercase mt-3 ml-2">{item.title}</h6>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="industry mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="text-center mt-5">
              <h2>Industries in our Portfolio</h2>
              {/* <p>Our technology stack is tested and safe,
                corresponding with the latest trends in web development.</p> */}
            </div>
          </div>
          <div className="items mt-5 d-flex flex-wrap justify-content-around">
            {industries.map((item, idx) => {
              return (
                <div className="item my-3 my-md-5 mx-2 mx-md-3 py-4 px-5">
                  <img src={item.image} alt={item.title}/>
                  <h6 className="mt-3 ml-2">{item.title}</h6>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsedTech;

const items = [
  {icon: <FaVuejs style={{width:"5rem", height:"5rem", color:"#32a2b8"}}/>, title: "Vue" },
  {icon: <FaReact style={{width:"5rem", height:"5rem", color:"#32a2b8"}}/>, title: "React"},
  {icon: <FaAngular style={{width:"5rem", height:"5rem", color:"#32a2b8"}}/>, title: "Angular"},
  {icon: <FaCss3Alt style={{width:"5rem", height:"5rem", color:"#32a2b8"}}/>, title: "CSS"},
  {icon: <FaHtml5 style={{width:"5rem", height:"5rem", color:"#32a2b8"}}/>, title: "HTML"},
  {icon: <FaGit style={{width:"5rem", height:"5rem", color:"#32a2b8"}}/>, title: "Git"},
  {icon: <FaLaravel style={{width:"5rem", height:"5rem", color:"#32a2b8"}}/>, title: "Laravel"},
  {icon: <FaNodeJs style={{width:"5rem", height:"5rem", color:"#32a2b8"}}/>, title: "Node"},
  {icon: <FaPhp style={{width:"5rem", height:"5rem", color:"#32a2b8"}}/>, title: "PHP"},
  {icon: <FaPython style={{width:"5rem", height:"5rem", color:"#32a2b8"}}/>, title: "Python"},
  {icon: <DiJavascript1 style={{width:"5rem", height:"5rem", color:"#32a2b8"}}/>, title: "JS"},
  {icon: <DiMongodb style={{width:"5rem", height:"5rem", color:"#32a2b8"}}/>, title: "MongoDB"}
];

const industries = [
  {image: startup, title: "Start-Ups"},
  {image: exchange, title: "Fintech"},
  {image: realestate, title: "Real Estate"},
  {image: health, title: "Healthcare"},
  {image: university, title: "Education"},
  {image: marketing, title: "Marketing"},
  {image: insta, title: "Social Media"},
  {image: laptop, title: "IT Services"},
  {image: store, title: "E-Commerce"},
  {image: airplane, title: "Transportation"},
  {image: video, title: "Entertainment"},
];