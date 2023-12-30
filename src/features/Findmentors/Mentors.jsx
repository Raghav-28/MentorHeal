import React from "react";
import { Rating } from "@mui/material";
import { WorkOutline } from "@mui/icons-material/";
import Data from "../../data/MentorShipCategories";

const Mentors = ({ filterCategeory, mentors }) => {
  return (
    <div className="mx-40 my-10 flex flex-row justify-between items-start">
      <div className=" flex flex-col">
        <h1 className="text-2xl text-gray-700">Filter</h1>
        <br />
        <div className="flex flex-col gap-6">
          {Data.map((item, i) => {
            return (
              <button
                className="px-5 py-2 text-black duration-300 ease-in-out border-[#4a7999] border-2 rounded-lg md:px-7 lg:px-7 lg:text-sm hover:bg-[#4a7999] hover:text-white"
                key={i}
                onClick={() => {
                  setfilterCategeory(item);
                }}
              >
                <h1>{item}</h1>
              </button>
            );
          })}
        </div>
      </div>
      <section
        className="  grid justify-center grid-cols-1 gap-6 flex-wrap
      
        md:grid-cols-2 lg:grid-cols-4"
      >
        {mentors
          ?.filter((item) => {
            if (filterCategeory === undefined) {
              return item;
            } else if (
              filterCategeory
                ?.toLowerCase()
                .includes(item.Categeory.toLowerCase())
            ) {
              return item;
            }
          })
          .map((_, i) => {
            return (
              <React.Fragment key={i}>
                <div className="  p-4 shadow-sm cursor-pointer shadow-gray-200 border-[1px] border-gray-200 rounded-lg flex flex-col justify-between">
                  <div>
                    <div className="flex flex-col gap-5 ">
                      <div className="">
                        <img
                          className="max-h-64 min-w-full aspect-square rounded-lg"
                          src={
                            _.photo
                              ? _.photo
                              : "https://randomuser.me/api/portraits/lego/7.jpg"
                          }
                          alt={_.name}
                        />
                      </div>
                      <div>
                        <h1 className="text-2xl font-bold text-[black]">
                          {_.name}
                        </h1>
                        {_.category ? (
                          <p className="mt-2 text-sm font-semibold text-gray-700 ">
                            <WorkOutline sx={{ marginBottom: "5px" }} /> &nbsp;
                            {_.category.map((cat, catKey) => (
                              <span key={catKey}>
                                {cat ? cat.toUpperCase() : "N/A"},&nbsp;{" "}
                              </span>
                            ))}
                          </p>
                        ) : null}

                        <p className="flex gap-1 mt-2 text-base text-[black]">
                          {/* {_.rating ? `Rated ${_.rating} ⭐` : "N/A"}<br/>   */}
                          <Rating
                            readOnly
                            name="read-only"
                            defaultValue={_.rating}
                            precision={0.5}
                          />
                          &nbsp; <span>{_.rating}</span>
                        </p>
                        {/* <p className="mt-1 text-base font-semibold text-gray-500">
                        Conversations : {_.Conversation}
                      </p> */}
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      {/* <h1 className="text-xs ">
                      <span className="font-semibold text-gray-500">
                        Next Available Appointment{" "}
                      </span>{" "}
                      :{" "}
                      <span className="text-slate-500">
                        {_.NextAppointment}
                      </span>
                    </h1> */}
                      {/* <p className="text-sm leading-6 text-gray-700 ">
                        {_.bio}
                      </p> */}
                    </div>
                  </div>
                  <div className="bg-gray-100 text-gray-700  rounded-md text-sm flex flex-row justify-between p-4 mt-4">
                    <div>
                      Experience
                      <br />
                      <span className="font-semibold">{_.experience ? <>{_.experience}+&nbsp;years</>:0}</span>
                    </div>
                    <div>
                      No of sessions
                      <br />
                      <span className="font-semibold">{_.sessions ? <>{_.sessions}</>:0}</span>
                    </div>
                  </div>
                  {/* <div className="flex justify-center mt-6 ">
                    <Link
                      to="/session"
                      className="hover:bg-[#4a7999] rounded-xl border-[1px] border-green-300 hover:text-white  w-[50vw] sm:w-[40vw] md:w-[30vw] lg:w-[24vw] font-semibold ease-in-out duration-500 py-2.5"
                    >
                      Book
                    </Link>
                  </div> */}
                </div>
              </React.Fragment>
            );
          })}
      </section>
    </div>
  );
};

export default Mentors;
