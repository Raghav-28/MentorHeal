import { ourMissionImage } from "../assets";

const OurMission = () => {
  return (
    <div className="flex flex-col-reverse items-center gap-4 m-8 md:flex-row md:justify-between">
      <div className="mt-4">
        <h1 className="font-kanit text-2xl lg:text-5xl text-[#4a7999]">
          OUR MISSION
        </h1>
        <p className="text-[#7C7C7C] font-kanit leading-5 text-sm md:text-[16.5px] md:leading-7 lg:leading-9 w-80 lg:w-[40vw] mt-5">
          MentorHeal aims to be India{`'`}s pioneering holistic wellness brand,
          guided by a profound understanding of the privilege of human existence
          and the profound potential within each individual. Recognizing that
          life consists of four essential dimensions - physical health (body),
          mental health (mind), emotional health (heart), and spiritual health
          (soul) - we are on a mission to empower people to lead truly
          fulfilling lives by harmonizing these aspects.
        </p>
      </div>
      <div>
        <img src={ourMissionImage} className="md:w-[470px] md:h-auto" />
      </div>
    </div>
  );
};

export default OurMission;
