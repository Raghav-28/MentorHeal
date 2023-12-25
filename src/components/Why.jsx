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
      Tittle: "Authentic Guidance",
    },
    {
      image: oneonone,
      Tittle: "One on One Mentorship",
    },
    {
      image: Top,
      Tittle: "Experienced Mentors",
    },
    {
      image: Community,
      Tittle: "Community Support",
    },
    {
      image: confidential,
      Tittle: "Confidential Conversation",
    },
  ];

  return (
    <div className="px-1.5 flex flex-col items-center justify-center w-[100vw] mx-auto  my-28 space-y-8 bg-gradient-to-l from-[#e9f3ee] to-[#f8ebe5] p-16">
      <div>
        <h1 className="text-3xl font-kanit md:text-4xl ">
          Why{" "}
          <span className="font-kanit text-transparent bg-gradient-to-l from-[#4a7999] via-[#5b99c3] to-[#4c8db8] bg-clip-text">
            MentorHeal?
          </span>
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 lg:gap-10 lg:flex-row ">
        {Data.map((_, i) => {
          return (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center space-y-3">
                <div>
                  <img
                    src={_.image}
                    alt=""
                    className="w-24 h-24 lg:w-32 lg:h-32"
                  />
                </div>
                <div>
                  <h1 className="font-kanit">{_.Tittle}</h1>
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
