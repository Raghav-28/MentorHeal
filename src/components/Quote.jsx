import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Quote = () => {
  const quotes = [
    {
      id: 1,
      img: "https://bestania.com/wp-content/uploads/2018/09/ROBIN-SHARMA-COVER-759x500.jpg",
      quote:
        "Investing in yourself is the best investment you will ever make.It will not only improve your life, it will improve the lives of all those around you.",
      name: "Robin Sharma",
    },
    {
      id: 2,
      img: "https://cdn.images.express.co.uk/img/dynamic/72/590x/secondary/Novak-Djokovic-Rafael-Nadal-Roger-Federer-Olympics-5084586.jpg?r=1700899508770",
      quote:
        "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      name: "Novak Djokovic",
    },

    {
      id: 12,
      img: "https://akm-img-a-in.tosshub.com/lingo/hrb/images/story/202302/untitled-design-2023-02-16t165401077160223050538.png?size=945:532",
      quote:
        "If you do something in the same space every day, it becomes easier and natural",
      name: "Jay Shetty",
    },
  ];

  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
  };

  return (
    <section className="mt-32">
      <div className="flex flex-col items-center px-5 my-10 md:px-8">
        <div>
          <h1 className="py-4 text-3xl font-kanit md:text-4xl">
            Wellness Builds
            <span className="font-kanit text-transparent bg-gradient-to-l from-[#4a7999] via-[#5b99c3] to-[#4c8db8] bg-clip-text">
              {" "}
              Character{" "}
            </span>
          </h1>
        </div>
      </div>
      <Slider {...settings} className=" w-[100vw] lg:w-[60vw] mx-auto mt-8">
        {quotes.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center justify-center gap-5 lg:flex-row">
                <div>
                  <img
                    src={item.img}
                    className="max-w-xs rounded-lg md:max-w-md grayscale"
                    alt=""
                  />
                </div>
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
