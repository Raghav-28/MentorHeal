import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { jayShetty, novakDjokovic, robinSharma } from "../assets";

const Quote = () => {
  const quotes = [
    {
      id: 1,
      img: robinSharma,
      quote:
        "Investing in yourself is the best investment you will ever make.It will not only improve your life, it will improve the lives of all those around you.",
      name: "Robin Sharma",
    },
    {
      id: 2,
      img: novakDjokovic,
      quote:
        "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      name: "Novak Djokovic",
    },

    {
      id: 12,
      img: jayShetty,
      quote:
        "If you do something in the same space every day, it becomes easier and natural",
      name: "Jay Shetty",
    },
  ];

  var settings = {
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
  };

  return (
    <section className="mt-32">
      <div className="flex flex-col items-center px-5 my-10 md:px-8">
        <h1 className="py-4 text-3xl font-kanit md:text-4xl">
          Wellness Builds
          <span className="font-kanit text-transparent bg-gradient-to-l from-[#4a7999] via-[#5b99c3] to-[#4c8db8] bg-clip-text">
            {" "}
            Character
          </span>
        </h1>
      </div>
      <Slider
        {...settings}
        className=" w-[100vw] md:w-[80vw] lg:w-[60vw] mx-auto mt-8"
      >
        {quotes.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center justify-center gap-5 lg:flex-row">
                <img
                  src={item.img}
                  className="max-w-xs aspect-video object-cover object-center rounded-lg md:max-w-sm grayscale mx-2"
                  alt={item.name}
                  loading="lazy"
                />
                <div className="max-w-xs">
                  <h1 className="text-lg font-kanit">{item.name}</h1>
                  <h1 className="text-[#8ca1b3] md:text-xl font-kanit  leading-7 lg:leading-8">
                    "{item.quote}"
                  </h1>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </Slider>
    </section>
  );
};

export default Quote;
