import React from "react";
import {
  Authentic,
  Top,
  oneonone,
  confidential,
  Community,
} from "../assets";

const Why = () => {
  const Data = [
    {
      image: Authentic,
      title: "Authentic Guidance",
    },
    {
      image: oneonone,
      title: "One on One Mentorship",
    },
    {
      image: Top,
      title: "Experienced Mentors",
    },
    {
      image: Community,
      title: "Community Support",
    },
    {
      image: confidential,
      title: "Confidential Conversation",
    },
  ];

  return (
    <div className="px-1.5 flex flex-col items-center justify-center w-[100vw] mx-auto  my-28 space-y-8 bg-gradient-to-l from-[#dbf0e5] to-[#e9d0c5] p-16">
      <div>
        <h1 className="text-4xl font-kanit md:text-4xl font-semibold">
          Why{" "}
          <span className="font-kanit text-transparent bg-gradient-to-l from-[#4a7999] via-[#5b99c3] to-[#4c8db8] bg-clip-text">
            MentorHeal?
          </span>
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-7 lg:gap-10 lg:flex-row ">
        {Data.map((_, i) => {
          return (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center space-y-5 ">
                <div>
                  <img
                    src={_.image}
                    alt=""
                    className="rounded-full  w-36 h-36 border-4 border-black lg:w-40 lg:h-40 transition-transform duration-300 transform hover:scale-110  shadow-xl shadow-slate-500 hover:shadow-xl hover:shadow-black-500 "
                  />
                </div>
                <div>
                  <h1 className=" text-2xl font-kanit transition-transform duration-300 transform hover:scale-110">{_.title}</h1>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Why;
