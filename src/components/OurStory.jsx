import { mainLogo } from "../assets";

const OurStory = () => {
  return (
    <div className="grid grid-cols-1 m-8 md:grid-cols-2 place-items-center md:gap-4">
      <div>
        <img className="w-[390px]" src={mainLogo} />
      </div>
      <div className="mt-10  lg:w-[40vw] text-[#7C7C7C]">
        <h1 className="text-[#4a7999] font-kanit text-2xl lg:text-5xl">
          ABOUT US
        </h1>
        <p className="text-[#7C7C7C] font-kanit leading-5 text-sm md:text-[16.5px] md:leading-7 lg:leading-9 w-80 lg:w-[40vw] mt-5">
          <b>MentorHeal</b> is a comprehensive platform dedicated to holistic
          wellness mentorship, providing individuals with access to certified
          mentors in various life aspects, including career development, mental
          health, relationships, fitness, financial wellness, spiritual and
          mindfulness guidance, and life coaching. It envisions a world where
          holistic well-being and personal growth are accessible to all,
          fostering meaningful connections and tailoring mentorship to
          individual needs while prioritizing expertise, credibility,
          confidentiality, and trust. <b>MentorHeal</b> aims to empower
          individuals on their journey towards self-improvement and a balanced,
          fulfilling life.
        </p>
      </div>
    </div>
  );
};

export default OurStory;
