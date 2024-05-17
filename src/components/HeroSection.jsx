import { Link } from "react-router-dom";
import { heroImage } from "../assets"; 

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="relative h-screen">
        <img
          className="absolute inset-0 w-full h-full object-cover   blur-2"
          src={heroImage}
          alt="hero image"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <h1 className="hero-heading text-4xl font-semibold text-black mb-28">
            <span className="gradient-text">
              Unlock Your True Potential:
            </span>{" "}
            <span className="black-text block">
              Navigate Your Path to Greatness with the Guidance of Mentorship
            </span>
          </h1>
          <p className="hero-paragraph text-3xl   text-black   mb-08 sm:text-x1  lg:text-3x1 xl:text-3xl">
            Together, with the guidance of mentors, we uncover the wealth of
            potential within each of us, igniting our purpose and illuminating
            the path to abundance for all.
          </p>
          <div className=" flex justify-center space-x-8 mt-24 ">
          <Link
            to="/mentors"
            className=" h-20 w-56 px-1 py-8 bg-slate-400 border-2 border-slate-400 rounded-lg  text-md font-semibold transition duration-300 ease-in-out hover:bg-opacity-80 hover:text-white hover:border-transparent"
          >
            Meet the Amazing Mentors
          </Link>
          <Link
            to="/how"
            className=" h-20 w-36 bg-slate-400 border-2 px-1 py-8 border-slate-400 rounded-lg  text-md font-semibold transition duration-300 ease-in-out hover:bg-opacity-80 hover:text-white hover:border-transparent"
          >
            See How 
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
