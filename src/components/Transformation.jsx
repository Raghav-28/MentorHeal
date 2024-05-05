import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { person1, person2, person3 } from "../assets";

const Transformation = ({ testimonialref }) => {
  const slides = [
    {
      id: 1,
      story:
        '"Their approach to wellness is truly holistic, taking into account all aspects of my life including nutrition, exercise, stress management, and self-care. My mentor was incredibly knowledgeable and supportive, providing me with personalized guidance and practical tools to help me achieve my goals. With their help, I was able to make significant improvements in my overall well-being and feel more empowered to take charge of my health. I highly recommend this company to anyone looking for a comprehensive and transformative wellness experience."',
      name: "RAJ SONI",
      image: person1,
    },
    {
      id: 2,
      story:
        '"I am amazed at the progress I have made. Their team of experts has helped me identify and overcome obstacles that were holding me back from achieving my full potential. Their approach to wellness is unique, combining evidence-based practices with a compassionate and supportive approach. They have helped me develop new habits and strategies for success that have improved my overall well-being and productivity. I am truly grateful for their support and highly recommend their services to anyone who is looking to live their best life."',
      name: "RUDRA SINGH",
      image: person2,
    },
    {
      id: 3,
      story:
        '"Their team is incredibly skilled, empathetic, and supportive, and they have helped me make significant improvements in my life. With their guidance, I have been able to overcome my limiting beliefs and tap into my full potential. Their approach to wellness is truly transformative, focusing on creating sustainable habits that promote overall well-being. I am extremely grateful for their continued support, I highly recommend their services to anyone who is looking to live their best life."',
      name: "VAISHALI VERMA",
      image: person3,
    },
  ];

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
  };

  return (
    <section className="my-20 bg-gradient-to-l from-[#dbf0e5] to-[#e9d0c5]">
      <div
        className="flex flex-col items-center justify-center my-5"
        ref={testimonialref}
      >
        <div className="text-center text-black ">
          <h1 className="py-4 text-3xl font-kanit md:text-4xl text-black">
            Proud Stories Of{" "}
            <span className="font-kanit   bg-clip-text  text-black">
              Transformation
              {/*bg-gradient-to-l from-[#4a7999] via-[#5b99c3] to-[#4c8db8] bg-clip-text  text-transparent */}
            </span>
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center px-8 lg:px-3">
        <Slider
          {...settings}
          className="w-[90vw] sm:w-[60vw] md:w-[50vw] mx-auto my-4 "
        >
          {slides.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div className="max-w-md lg:max-w-none space-y-7 items-center ">
                  <img
                    className="rounded-full h-32 w-32 lg:ml-80 bg-cover bg-center sm:ml-36 md:ml-56 border-black border-[4px]"
                    src={item.image}
                    alt={`image of person${index + 1}`}
                  />
                  <p className="text-black leading-7 text-center lg:text-left font-kanit">
                    {item.story}
                  </p>
                  <h1 className=" justify-centre m-auto text-center align-center text-clip text-white bg-black font-kanit my-3.5 lg:text-xl inline-block ml-72">
                    {item.name}
                  </h1>
                </div>
              </React.Fragment>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Transformation;
