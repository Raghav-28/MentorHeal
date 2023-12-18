import React from "react";
import { Link } from "react-router-dom";
export default function Mentors({ filterCategeory, mentors }) {
  return (
    <>
      <section className="grid justify-center grid-cols-1 gap-6 px-3 my-20 lg:px-10 md:grid-cols-2 lg:grid-cols-3">
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
                <div className="  p-7 shadow-xl  cursor-pointer shadow-gray-200 border-[1px] border-gray-200 rounded-lg">
                  <div className="flex gap-5 ">
                    <div>
                      <img
                        className="object-cover w-40 h-40 rounded-full"
                        src={_.image}
                        alt={_.image}
                      />
                    </div>
                    <div>
                      <h1 className="text-lg font-bold text-[#636363]">
                        {_.Name}
                      </h1>
                      <p className="mt-2 text-sm font-semibold text-gray-500">
                        {_.Categeory}
                      </p>
                      <p className="mt-3 text-xs text-gray-500">
                        ({_.Rating}) ⭐⭐⭐⭐⭐
                      </p>
                      <p className="mt-1 text-sm font-semibold text-gray-500">
                        Conversations : {_.Conversation}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 space-y-2">
                    <h1 className="text-xs ">
                      <span className="font-semibold text-gray-500">
                        Next Available Appointment{" "}
                      </span>{" "}
                      :{" "}
                      <span className="text-slate-500">
                        {_.NextAppointment}
                      </span>
                    </h1>
                    <p className="text-sm leading-6 text-gray-500 font-">
                      {_.bio}
                    </p>
                  </div>
                  <div className="flex justify-center mt-6 ">
                    <Link to="/session">
                      <button className="hover:bg-[#4a7999] rounded-xl border-[1px] border-green-300 hover:text-white  w-[50vw] sm:w-[40vw] md:w-[30vw] lg:w-[24vw] font-semibold ease-in-out duration-500 py-2.5">
                        Book
                      </button>
                    </Link>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
      </section>
    </>
  );
}
