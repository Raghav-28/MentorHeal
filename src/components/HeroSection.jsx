import { Link } from "react-router-dom";
import { heroImage } from "../assets";


const HeroSection = () => {
  return (
    <section className="px-5 pt-16">
      <div className="flex flex-col justify-between my-5 lg:flex-row md:items-center md:px-5">
        <div className="py-4 mx-auto">
          <img
            className="animate-slidein500  max-w-xs md:max-w-lg"
            src={heroImage}
            alt="hero image"
            style={{ animationDelay: '.5s' }}
          />
        </div>
        <div className="flex flex-col items-center justify-between py-8 space-y-6 lg:px-5 md:items-start lg:space-y-9">
          <div className=" animate-typewriter flex flex-col items-center justify-between px-5 py-8 space-y-6 md:items-start lg:space-y-9 overflow-hidden"  >
            <h1 className=" animate-typewriter text-2xl md:text-4xl lg:max-w-[40vw] leading-10 font-kanit">
              <span className=" font-kanit text-transparent bg-gradient-to-l from-[#4a7999] via-[#5b99c3] to-[#4c8db8] bg-clip-text" style={{ animationDelay: '0.3s' }}>
                Unlock Your True Potential:
              </span>{" "}
            <span className="text-black" style={{ animationDelay: '.4s' }}>
            Embrace Mentorship and Soar to New Heights!"
            </span>
            </h1>
            <p className=" animate-slidein500 text-lg text-[#4a7999] md:text-xl md:max-w-[40vw] font-kanit" style={{ animationDelay: '.5s' }} >
              Together, with the guidance of mentors, we uncover the wealth of
              potential within each of us, igniting our purpose and illuminating
              the path to abundance for all..
            </p>
            <div className=" animate-slidein700 flex flex-col md:flex-row gap-4 [&>a]:text-center w-full"  style={{ animationDelay: '.5s' }} >
              <Link
                to="/mentors"
                className="md:w-fit py-3 md:py-2 text-sm font-semibold text-white duration-500 ease-in-out rounded-full px-6 bg-[#4a7999] border-[#4a7999] border hover:bg-[#5495c0] hover:text-white"
              >
                Meet the Amazing Mentors
              </Link>
              <Link
                to="/how"
                className="py-3 md:py-2 text-sm font-semibold  duration-500 ease-in-out rounded-full px-6 text-white bg-[#4a7999] border-[#4a7999] border hover:bg-[#5495c0] hover:text-white"
              >
                See How
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
