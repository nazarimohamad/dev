import React from 'react';
import { Nav } from 'react-bootstrap';
import hstn from '../images/houston.jpg';
import amsterdam from '../images/amsterdam.jpg';
import tallinn from '../images/tallinn.jpg';
import london from '../images/london.jpeg';

const Jobs = () => {

  let houston = {name: "houston", img: hstn, jobs: ["Senior Full-Stack", "Data Science"]};
  const [city, setCity] = React.useState("houston");
  const [data, setData] = React.useState(houston);
  const [click, setClick] = React.useState(false);

  const handleSelectCity = (activeKey) => {
    setClick(false);
    if(activeKey === "houston") {
      setData({name: "houston", img: hstn, jobs: ["Senior Full-Stack", "Data Science"]});
      setCity(activeKey);
    } else if(activeKey === "amsterdam") {
      setData({name: "amsterdam", img: amsterdam, jobs: ["No job available right now..."]});
      setCity(activeKey);
    } else if(activeKey === "tallinn") {
      setData({name: "tallinn", img: tallinn, jobs: ["UI/UX Designer", "Front-End Developer"]});
      setCity(activeKey);
    } else if(activeKey === "london") {
      setData({name: "london", img: london, jobs: ["UI/UX Designer"]});
      setCity(activeKey);
    }
  }


  const handleClickList = (value) => {
    setClick(!click);
  }


  return (
    <div className="jobs my-5">
      <div className="container">
        <h2>Available jobs:</h2>
       <div className="tab">
       <Nav className="justify-content-center"
             activeKey={city}
             variant="tabs"
             onSelect={handleSelectCity}>
          <Nav.Item>
            <Nav.Link eventKey="houston">Houston</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="amsterdam">Amsterdam</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="tallinn">Tallinn</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="london">London</Nav.Link>
          </Nav.Item>
        </Nav>
       </div>
       <div className="city row justify-content-center">
          <div className="my-5 col-10 col-md-4 col-lg-4">
            {data.jobs.map((i, idx) => (
              <h6 key={idx} onClick={() =>handleClickList(idx)}>
              {i} <span className={click===true ? "down" : ""}>></span>
              {click === true ?

                (city==="london") ?
                idx === 0 ? <div>{design}</div> : "" :
                (city==="houston") ?
                idx === 0 ? <div>{fullstack}</div> : <div>{dataScience}</div> :
                (city==="tallinn") ?
                idx === 0 ? <div>{design}</div> : <div>{frontend}</div> : ""
                :
                ""
              }
            </h6>
            ))}
          </div>
          <div className="my-5 col-10 col-md-6 col-lg-8">
            <img src={data.img} alt={data.name}/>
          </div>
       </div>
      </div>
    </div>
  );
}

export default Jobs;


const fullstack =
    <div>
      <h6>Requirement Skills:</h6>
      <ul className="ml-4">
        <li>React</li>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>Express</li>
      </ul>
    </div>;

const dataScience =
    <div>
      <h6>Requirement Skills:</h6>
      <ul>
        <li>Python</li>
        <li>Development of data models TensorFlow</li>
        <li>Strong analytical skills</li>
      </ul>
    </div>;


const frontend =
    <div>
      <h6>Requirement Skills:</h6>
      <ul>
        <li>React</li>
        <li>RESTful services</li>
        <li>Unit Testing</li>
      </ul>
    </div>;

const design =
  <div>
    <h6>Requirement Skills:</h6>
    <ul>
      <li>Android/iOS/WebApp experience</li>
      <li>Strong UX / conception skills</li>
      <li>fluent in English</li>
    </ul>
  </div>;