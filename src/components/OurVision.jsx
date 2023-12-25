import { ourVisionImage } from "../assets";

const OurVision = () => {
  return (
    <div className="grid grid-cols-1 m-8 md:grid-cols-2 place-items-center md:gap-4 ">
      <div>
        <img className="w-[390px]" src={ourVisionImage} />
      </div>
      <div className="mt-10  lg:w-[40vw] text-[#7C7C7C]  ">
        <h1 className="text-[#4a7999] font-kanit text-2xl lg:text-5xl">
          OUR VISION
        </h1>
        <p className="text-[#7C7C7C] font-kanit leading-5 text-sm md:text-[16.5px]  md:leading-7 lg:leading-9 w-80 lg:w-[40vw] mt-5">
          Our vision is to create a world where individuals can attain complete
          well-being in all these dimensions, enabling them to unlock their
          highest potential and live a life that resonates with their innermost
          purpose. We believe that true excellence is a journey, and we are
          dedicated to walking this transformative path with our mentors and
          mentees, providing them with the tools, knowledge, and mentorship
          necessary to help them achieve holistic balance and become their most
          authentic selves. MentorHeal offers a platform that connects
          individuals with certified mentors and fosters meaningful connections
          in various life domains, ensuring that they can confidently pursue
          their unique paths of growth and fulfillment.
        </p>
      </div>
    </div>
  );
};

export default OurVision;
