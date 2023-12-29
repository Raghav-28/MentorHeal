import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { NavBar, Footer } from "../components";
import { FavoriteBorderOutlined, FavoriteOutlined } from "@mui/icons-material";

const ReadFullBlog = () => {
  const { id } = useParams();
  console.log(id);
  
  const data = useLocation();
  const { Blogimage, BLogTitle, Sections, Reactions } = data.state;
  const [react, setReact] = useState(false);
  const HandleLike = () => {
    setReact(true);
  };

  return (
    <React.Fragment>
      <NavBar />
      <main className="flex justify-between pt-20 overflow-x-clip">
        <section className="px-7 lg:pl-48 lg:ml-20 max-w-5xl bg-white border-[0.5px] border-slate-50">
          <div className="flex justify-start pt-5 ">
            <h1 className="space-y-2.5 max-w-2xl text-xl font-bold lg:text-4xl ">
              {BLogTitle}
            </h1>
          </div>
          <div className="flex justify-start pt-5 pr-3 md:pr-0">
            <img
              src={Blogimage}
              className="aspect-video max-w-xs duration-300 ease-in-out rounded-md cursor-pointer lg:max-w-2xl hover:brightness-90"
              alt={Blogimage}
            />
          </div>
          <br />
          <div className="text-[#475569]">
            <button onClick={() => HandleLike()}>
              {react ? (
                <FavoriteOutlined className="cursor-pointer" />
              ) : (
                <FavoriteBorderOutlined className=" cursor-pointer" />
              )}
            </button>
            &nbsp; {Reactions}
          </div>
          <div className="flex flex-col justify-start gap-8 pb-8 mt-8 ">
            {Sections?.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="space-y-2.5 max-w-2xl">
                    <h1 className="font-semibold leading-7">
                      {item?.SectionTittle}
                    </h1>
                    <p className="leading-8">{item?.SectionPara}</p>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
          <div className="text-[#475569]">
            <button onClick={() => HandleLike()}>
              {react ? (
                <FavoriteOutlined className="cursor-pointer" />
              ) : (
                <FavoriteBorderOutlined className=" cursor-pointer" />
              )}
            </button>
            &nbsp; {Reactions}
          </div>
          <br />
        </section>
        <div className="hidden pt-40 pr-24 md:block">
          <Link to="/session">
            <img
              src="https://d1hny4jmju3rds.cloudfront.net/blogSidebar/talktoexpert.png"
              alt=""
              className=" max-w-xs cursor-pointer"
            />
          </Link>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default ReadFullBlog;
