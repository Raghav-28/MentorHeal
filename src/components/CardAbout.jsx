import React from "react";
import { lg1, lg2, lg3, lg4, lg5, lg6, lg7 } from "../assets";

const CardAbout = () => {
  const data = [
    {
      Name: "Ayush Kulkarni",
      Position: "Co-Founder",
      imageUrl: lg1,
    },
    {
      Name: "Atul Akella",
      Position: "Co-Founder and COO",
      imageUrl: lg2,
    },
    {
      Name: "Abhinav Singh",
      Position: "Co-Founder and CTO",
      imageUrl: lg3,
    },
    {
      Name: "Brijesh Kulkarni",
      Position: "Co-Founder and CPO",
      imageUrl: lg4,
    },
    {
      Name: "Ansh Singh Sonkhia",
      Position: "Co-Founder and Product Strategist",
      imageUrl: lg5,
    },
    {
      Name: "Arihant Gupta",
      Position: "Principal Consultant",
      imageUrl: lg6,
    },
    {
      Name: "Sashreek Reddy",
      Position: "Marketing Lead",
      imageUrl: lg7,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-14">
      <div className="pt-8">
        <h1 className="text-3xl lg:text-4xl text-[#4a7999]">OUR TEAM</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 p-4 mt-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {data.map((member, index) => {
          return (
            <React.Fragment key={index}>
              <div className="max-w-md duration-500 ease-in-out cursor-pointer border-[1px] border-slate-300 p-4 hover:shadow-md rounded-lg">
                <img
                  className="md:w-[20vw] hover:brightness-75  grayscale duration-700 ease-in-out"
                  src={member.imageUrl}
                  alt=""
                />
                <div className="space-y-2.5 mt-3 text-center">
                  <div className="text-xl font-bold md:text-2xl text-[#4a7999]">
                    {member.Name}
                  </div>
                  <p className="font-kanit text-[#8ca1b3]">{member.Position}</p>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      {/* <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {data.map((_, index) => {
          return (
            <div
              key={index}
              className="relative items-center justify-center overflow-hidden transition-shadow cursor-pointer group hover:shadow-xl hover:shadow-black/30 rounded-xl"
            >
              <div className="h-96 w-72">
                <img
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={_.Image}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="text-3xl font-bold text-white font-dmserif">
                  {_.Name}
                </h1>
                <p className="mb-3 text-lg italic text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  {_.Position}
                </p>
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default CardAbout;
