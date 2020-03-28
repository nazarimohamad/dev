import React from 'react';
import resume from "../images/resume.png";
import interview from "../images/interview.png";
import check from "../images/check.png";
import accept from "../images/accept.png";



const Process = () => {
  return (
    <div className="process">
      <div className="container">
        <h2>Recruitment Process:</h2>
        <div className="items row justify-content-center">
          {items.map((item, idx) => {
            return (
              <div key={idx} className="item m-md-5 col-10 col-md-4">
                <img src={item.img} alt={item.title}/>
                <h1 className="">
                  {item.num}
                </h1>
                <p>{item.title}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}


export default Process;


const items= [
  {num: 1, img: resume, title: "Send us your resume"},
  {num: 2, img: interview, title: "Interview with candidate"},
  {num: 3, img: check, title: "Technical Skills Check"},
  {num: 4, img: accept, title: "Accept for the position"},
]