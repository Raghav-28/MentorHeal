import React from "react";
import { useContext } from "react";
import { WorkOutline } from "@mui/icons-material/";
import Data from "../../data/MentorShipCategories";
import { mentorsContext } from "./context";
import "./checkbox.css";
import Rate from "./Rating";

const Mentors = ({ setfilterCategory, filterCategory = [], mentors }) => {
  const [mentor, setMentors] = useContext(mentorsContext);
  const sortedMentors = mentor;

  return (
    <div className="2xl:mx-36 xl:mx-24 lg:mx-16 md:mx-14 sm:mx-10 mx-4 my-10 flex flex-col lg:flex-row lg:justify-between justify-center items-start gap-4">
      <div className="flex flex-col gap-8 mb-10">
        <h1 className="text-3xl text-gray-700">Filter</h1>
        <div className="flex lg:flex-col flex-row flex-wrap gap-4">
          {Data.map((item, i) => {
            const lowercaseItem = item.toLowerCase().trim();
            return (
              <div key={i} className="flex w-44">
                <div className="checkbox-wrapper-33">
                  <label className="checkbox">
                    <input
                      onClick={() => {
                        // console.log(filterCategory);
                        const modified = filterCategory?.map((val) => {
                          // console.log(item, val.category, !val.filter);
                          return val.category === lowercaseItem
                            ? { ...val, filter: !val.filter }
                            : val;
                        });
                        // console.log(modified);
                        setfilterCategory(modified);
                      }}
                      className="checkbox__trigger visuallyhidden"
                      type="checkbox"
                    />
                    <span className="checkbox__symbol">
                      <svg
                        aria-hidden="true"
                        className="icon-checkbox"
                        width="28px"
                        height="28px"
                        viewBox="0 0 28 28"
                        version="1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4 14l8 7L24 7"></path>
                      </svg>
                    </span>
                    <p className="checkbox__textwrapper">{item}</p>
                  </label>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <section className="shrink-0 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 mx-auto">
        {(sortedMentors ? sortedMentors : mentors)
          ?.filter((item) => {
            const skip = filterCategory.find((val) => val.filter);
            {
              /* console.log(`skip value `,skip) */
            }
            if (skip === undefined) {
              return item;
            }
            const filterParams = filterCategory.filter((val) => val.filter);
            {
              /* console.log(filterParams, `to be compared`, item); */
            }
            const result = item.category.find((val) => {
              const dec = filterParams.find((a) => {
                {
                  /* console.log(a.category, val.toLowerCase().trim()); */
                }
                return a.category === val.toLowerCase().trim();
              });
              {
                /* console.log(`dec `,dec); */
              }
              return dec;
            });
            {
              /* console.log(``, result); */
            }
            if (result) {
              return item;
            }
            {
              /* var filterLower = filterCategory ? filterCategory : "";
            filterLower = filterLower.toLowerCase().trim();
            const found = item.category.find((val) => {
              console.log(
                val,
                " ",
                filterLower,
                " result - ",
                val.toLowerCase() === filterLower
              );

              return val.toLowerCase() === filterLower;
            });
            if (found) {
              return item;
            } */
            }
          })
          .map((_, i) => {
            return (
              <React.Fragment key={i}>
                <div className="max-w-max max-h-max p-4 shadow-sm cursor-pointer shadow-gray-200 border-[1px] border-gray-200 rounded-lg flex flex-col justify-between">
                  <div>
                    <div className="flex flex-col gap-5 ">
                      <div className="flex flex-end">
                        <img
                          className="h-72 aspect-square rounded-lg"
                          src={
                            _.photo
                              ? _.photo
                              : "https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg"
                          }
                          alt={_.name}
                        />
                      </div>
                      <div>
                        <h1 className="text-2xl font-bold text-[black]">
                          {_.name}
                        </h1>
                        <h5 className="mt-2 max-w-72 text-sm text-ellipsis line-clamp-3">
                          {_.headline}
                        </h5>
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
                          &nbsp;
                          <Rate rating={_.rating ? _.rating : 0} />
                          <span>{_.rating}</span>
                        </p>
                        {/* <p className="mt-1 text-base font-semibold text-gray-500">
                        Conversations : {_.Conversation}
                      </p> */}
                      </div>
                    </div>
                    {/* <div className="space-y-2">
                      <h1 className="text-xs ">
                      <span className="font-semibold text-gray-500">
                        Next Available Appointment{" "}
                      </span>{" "}
                      :{" "}
                      <span className="text-slate-500">
                        {_.NextAppointment}
                      </span>
                    </h1>
                      <p className="text-sm leading-6 text-gray-700 ">
                        {_.bio}
                      </p>
                    </div> */}
                  </div>
                  <div className="bg-gray-100 text-gray-700  rounded-md text-sm flex flex-row justify-between p-4 mt-8">
                    <div>
                      Experience
                      <br />
                      <span className="font-semibold">
                        {_.exp ? <>{_.exp}+&nbsp;years</> : 0}
                      </span>
                    </div>
                    <div>
                      No of sessions
                      <br />
                      <span className="font-semibold">
                        {_.sessions ? <>{_.sessions}</> : 0}
                      </span>
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
