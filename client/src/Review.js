import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';


const Review = () => {
  return (
    <div className="review container">
      <div className="my-5 review_text">
        <h2>What our customers says about us</h2>
        {/* <hr/> */}
      </div>
      <div className="review_carousel">
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024
          },
          items: 3,
          partialVisibilityGutter: 40
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0
          },
          items: 1,
          partialVisibilityGutter: 30
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464
          },
          items: 2,
          partialVisibilityGutter: 30
        }
      }}
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {reviews.map(item => {
          return (
        <div className='text-center multiCarousel'>
         <div>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating name="disabled" value={item.star} readOnly/>
          </Box>
         </div>
          <h1>{item.name}</h1>
          <p>{item.desc}</p>
        </div>
      );
    })}
    </Carousel>
    </div>
  </div>
  );
};

export default Review;


const reviews = [
  {name: "Irina", star: 5, desc:"Our partnership with bteks has always been a very professional and efficient. We would like to thank them for their input!"},
  {name: "Daniel", star: 5, desc:"I thoroughly enjoyed how passionate and dedicated Bteks were whilest they worked with us on our app design."},
  {name: "Kristine", star: 5, desc:"Bteks helps us to create a 21st century product design. They are definitely a world-class design team!"},
  {name: "Marlon", star: 4, desc:"We began working with Bteks in order to redesign our outdate website. Bteks was able to assist us with design and development of new website."},
  {name: "Bartu", star: 5, desc:"The team were extremely responsive, with a quick turnovered, excellent client communications and have flexability to adapt to new request."},
  {name: "Guillaume", star: 5, desc:"Our development exprience with Bteks has been fantastic. They are the best"},
  {name: "Kim", star: 5, desc:" I can truly recommend Bteks on delivering outstanding quality!"},
  {name: "Amelie", star: 5, desc:"They have been very creative in helping us with ideas and solutions to problems while also delivering in a timely fashion."},
]


