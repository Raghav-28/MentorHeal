import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Footer, NavBar, Appointment } from "./";

const ReadFull = () => {
  const { id } = useParams();
  const location = useLocation();
  const data = useLocation();
  const [point, setPoint] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <NavBar />
      <div className="pt-20">
        {/* <img src={data.state.Background} className="" alt="" /> */}
        <h1 className=" top-64 text-[#001C30] hidden md:block pl-44  md:text-5xl   text-transparent  bg-gradient-to-l from-[#4a7999] via-[#5b99c3] to-[#4c8db8]  bg-clip-text">
          {id}
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center space-y-10 px-11 lg:space-x-10 lg:flex-row lg:items-start md:space-y-0 py-14">
        <div className="flex flex-col-reverse md:flex-row lg:flex-col">
          {data.state.Blog.map((item, index) => {
            return (
              <div key={index}>
                <button
                  className="px-4 py-2 my-2 shadow-md w-52"
                  key={index}
                  onClick={() => {
                    setPoint(index);
                  }}
                >
                  <h1 className="text-lg text-gray-400">
                    {item.title.toUpperCase()}
                  </h1>
                </button>
              </div>
            );
          })}
        </div>
        <div className="max-w-2xl space-y-3">
          <h1 className="py-4 text-xl font-bold text-transparent bg-gradient-to-l from-[#4a7999] via-[#5b99c3] to-[#4c8db8]  bg-clip-text md:text-2xl lg:text-3xl">
            {data.state.Blog[point].title}
          </h1>
          {data.state.Blog[point].points.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div className="flex gap-2">
                  o
                  <p className="text-[#676767] text-sm font-semibold">
                    {item.toUpperCase()}
                  </p>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <Appointment />
      <Footer />
    </>
  );
};

export default ReadFull;
