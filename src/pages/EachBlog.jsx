import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { NavBar, Footer, Loader } from "../components";
import { FavoriteBorderOutlined, FavoriteOutlined } from "@mui/icons-material";

const EachBlog = () => {
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState({
    title: "",
    image: "",
    BlogSections: [],
    reactions: "",
  });
  const { blogid } = useParams();
  const navigate = useNavigate();

  const fetchBlog = async () => {
    const docRef = doc(db, "BLOGS", blogid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setBlogData(docSnap.data());
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      navigate("/blog");
    }
    setLoading(false);
  };
  // fetchBlog();
  // const data = useLocation();
  // const { Blogimage, BLogTitle, Sections, Reactions } = data.state;
  const [react, setReact] = useState(false);
  const handleReact = () => {
    setReact(true);
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <React.Fragment>
      <NavBar />
      {loading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <main className="flex justify-between pt-20 overflow-x-clip">
            <section className="px-7 lg:pl-48 lg:ml-20 max-w-5xl bg-white border-[0.5px] border-slate-50">
              <div className="flex justify-start pt-5 ">
                <h1 className="space-y-2.5 max-w-2xl text-xl font-bold lg:text-4xl ">
                  {blogData.title}
                </h1>
              </div>
              <div className="flex justify-start pt-5 pr-3 md:pr-0">
                <img
                  src={blogData.image}
                  className="aspect-video max-w-xs duration-300 ease-in-out rounded-md cursor-pointer lg:max-w-2xl hover:brightness-90"
                  alt={blogData.title}
                />
              </div>
              <br />
              <div className="text-[#475569]">
                <button onClick={() => handleReact()}>
                  {react ? (
                    <FavoriteOutlined className="cursor-pointer" />
                  ) : (
                    <FavoriteBorderOutlined className=" cursor-pointer" />
                  )}
                </button>
                &nbsp; {blogData.reactions}
              </div>
              <div className="flex flex-col justify-start gap-8 pb-8 mt-8 ">
                {blogData.BlogSections?.map((item, index) => {
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
                <button onClick={() => handleReact()}>
                  {react ? (
                    <FavoriteOutlined className="cursor-pointer" />
                  ) : (
                    <FavoriteBorderOutlined className=" cursor-pointer" />
                  )}
                </button>
                &nbsp; {blogData.reactions}
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
      )}
    </React.Fragment>
  );
};

export default EachBlog;
