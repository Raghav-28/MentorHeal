import React from "react";
import { Link, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function ReadFullBlog() {
  const data = useLocation();

  const { Blogimage, BLogTittle, Sections } = data.state;

  return (
    <main>
      <NavBar />
      <div className="flex justify-between pt-20 overflow-x-clip">
        <section className="px-7 lg:pl-48 lg:ml-20 max-w-5xl bg-white border-[0.5px] border-slate-50">
          <div className="flex justify-start pt-5 ">
            <h1 className="max-w-2xl text-xl font-bold underline lg:text-2xl ">
              {BLogTittle}
            </h1>
          </div>
          <div className="flex justify-start pt-5 pr-3 md:pr-0">
            <img
              src={Blogimage}
              className="max-w-xs duration-300 ease-in-out rounded-md cursor-pointer lg:max-w-2xl hover:brightness-90"
              alt={Blogimage}
            />
          </div>
          <div className="flex flex-col justify-start gap-8 pb-8 mt-8 ">
            {Sections?.map((item, index) => {
              return (
                <React.Fragment key={index + 1}>
                  <div className="space-y-2.5 max-w-2xl ">
                    <h1 className="font-semibold leading-7">
                      {item?.SectionTittle}
                    </h1>
                    <p className="leading-8">{item?.SectionPara}</p>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </section>
        <div className="hidden pt-36 md:block">
          <Link to="/session">
            <img
              src="https://d1hny4jmju3rds.cloudfront.net/blogSidebar/talktoexpert.png"
              alt=""
              className="fixed max-w-xs cursor-pointer right-24"
            />
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
