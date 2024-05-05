import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../config/firebase";
import { collection, getDocs, limit, orderBy } from "firebase/firestore";
const LatestBlogs = () => {
  const [AllBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = collection(db, "BLOGS");
        const querySnapshot = await getDocs(
          collectionRef,
          orderBy("reactions", "desc"),
          limit(2)
        );
        const blogsData = [];
        querySnapshot.forEach((doc) => {
          if (doc.exists()) {
            blogsData.push({ id: doc.id, data: doc.data() });
          }
        });

        setAllBlogs(blogsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="mt-32 text-center overflow-hidden">
        <h1 className="text-3xl font-kanit md:text-4xl font-semibold" >
          Latest on Your{" "}
          <span className=" font-kanit text-transparent bg-gradient-to-l from-[#4a7999] via-[#5b99c3] to-[#4c8db8] bg-clip-text">
            MentorHeal
          </span>{" "}
          Blog
        </h1>
      </div>
      <section className="flex justify-center gap-12 pt-3 pb-8 mt-4 mb-4 bg-white flex-wrap">
        {AllBlogs?.slice(0, 3)?.map((blog, index) => {
          return (
            <Link
              key={index}
              className="max-w-sm p-2 space-y-2 cursor-pointer md:max-w-md lg:max-w-lg"
              to={`/blog/${blog.id}`}
            >
              <div className="  w-80 h-96 cursor-pointer bg-[#EEF5FF] hover:shadow-md shadow-slate-50 scroll-smooth transition-transform duration-300 transform ronded-md hover:scale-105 " >
                <div>
                  <img
                    src={blog.data.image}
                    className="rounded-md  h-56   object-cover object-center "
                    alt={blog.data.title}
                  />
                </div>
                <br />
                <div className="font-semibold text-xl  font-kanit ">
                  <h1 >
                    {blog.data.title}
                  </h1>
                </div>
              </div> 
              <hr className="mt--8 h-1 bg-black" />
              {/* <div>
                <p className="text-justify text-gray-700 text-ellipsis line-clamp-3">
                  {blog.data.BlogSections[0].SectionPara}
                </p>
              </div> */}
              <div className="text-black ml-20  text-clip inline-block rounded-sm border-black  bg-[#EEF5FF] ">
                {blog.data.reactions} people found it useful
              </div>
            </Link>
          );
        })}
      </section>
      <div className="flex justify-center">
        <Link to="/blog">
          <button className="py-3 text-white px-9 bg-[#4a7999] rounded-3xl hover:bg-[#EEF5FF] hover:text-black border-black border-[2px] font-kanit">
            Read More Articles
          </button>
        </Link>
      </div>
    </>
  );
};

export default LatestBlogs;
