import React from 'react';
import {Card} from "react-bootstrap";
import { GiStickFrame, GiDiceSixFacesFive } from 'react-icons/gi';
import { FaKickstarter, FaBug, FaProductHunt } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import "../style.scss"


const Product = () => {
  return (
    <section className="product mt-5">
      <div className="container mt-5">
        <div className="row">
          <div className="text-center product_desc">
            <h2>What we do</h2>
            <hr/>
            <p>We provides full-cycle outsourcing software development services.
              From designing and developing a Minimum Viable Product to ensuring the flawless
              execution of your project with thorough manual and automated software testing.
              We employ developers, software testers, QA engineers, business analysts, and DevOps specialists—each dedicated to
              ensuring that your business benefits from the software we develop. We help:
            </p>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          {products.map(item => (
            <div className="col-8 col-md-4 text-center">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="services row mt-5 justify-content-center">
          <div>
            <h2>Our services</h2>
            <hr/>
        </div>
        <div className="row mt-5 text-center justify-content-center">
          {services.map(item => (
            <div className="col-9 col-md-4 my-3">
              <Card className="box">
                <i className="my-5">{item.image}</i>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.desc}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Product;



const products = [
  {title: "Entrepreneurs", desc: "We research your idea, decompose it into features, evaluate them, and develop only those that are vital for launch."},
  {title: "Early‑stage company", desc: "We help you to create your software very fast, so you don't lose competition cycle in digital world."},
  {title: "Small Businesses", desc: "We can help with modernizing your business through online solutions."},
];
const services = [
  {image: <FaKickstarter style={{width:"3rem", height:"3rem", color:"#32a2b8"}}/>, title: "Kick-off", desc: "Main principles of each project are design guidelines, time schedules and communication channels."},
  {image: <GiStickFrame style={{width:"3rem", height:"3rem", color:"#32a2b8"}}/>, title: "Wireframes", desc: "We create empty squares with black borders so you could see a simplified outline of your product."},
  {image: <GiDiceSixFacesFive style={{width:"3rem", height:"3rem", color:"#32a2b8"}}/>, title: "UI Design", desc: "Your website is your face, so we design user freindly interface that always deliver expresice results."},
  {image: <MdDeveloperMode style={{width:"3rem", height:"3rem", color:"#32a2b8"}}/>, title: "Development", desc: "We start writing code based on the UI you confirm from the previous step with keeping changes."},
  {image: <FaBug style={{width:"3rem", height:"3rem", color:"#32a2b8"}}/>, title: "QA and Bug fixing", desc: "Before lunching, we run it and check it to see an unexpected bug and kill it."},
  {image: <FaProductHunt style={{width:"3rem", height:"3rem", color:"#32a2b8"}}/>, title: "Production", desc: "After all checked and re-checked on a website, it’s time to upload it to a Live server."},
]