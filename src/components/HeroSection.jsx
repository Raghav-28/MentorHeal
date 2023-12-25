import { Link } from "react-router-dom";
import { heroImage } from "../assets";

const HeroSection = () => {
  return (
    <div className="pt-16">
      <section className="px-5 ">
        <div className="flex flex-col justify-between my-5 lg:flex-row md:items-center md:px-5">
          <div className="py-4 mx-auto">
            <img
              className="max-w-xs md:max-w-lg"
              src={heroImage}
              alt="hero.png"
            />
          </div>
          <div className="flex flex-col items-center justify-between py-8 space-y-6 lg:px-5 md:items-start lg:space-y-9">
            <div className="flex flex-col items-center justify-between px-5 py-8 space-y-6 md:items-start lg:space-y-9">
              <h1 className="text-2xl md:text-4xl lg:max-w-[40vw] leading-10 font-kanit">
                <span className="font-kanit text-transparent bg-gradient-to-l from-[#4a7999] via-[#5b99c3] to-[#4c8db8] bg-clip-text">
                  Mentorship
                </span>{" "}
                can help you embrace your potential!
              </h1>
              <p className="text-lg text-[#8ca1b3] md:text-xl md:max-w-[40vw] font-kanit">
                We are all already abundant. We just need a mentor to help us
                realise it and discover our purpose.
              </p>
              <Link to="/how">
                <button className="py-2 text-sm font-semibold text-white duration-500 ease-in-out rounded-full px-9 bg-[#4a7999]">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
