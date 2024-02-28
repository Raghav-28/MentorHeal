import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { db } from "../config/firebase";
import { collection, getDocs, limit, orderBy } from "firebase/firestore";
import { useEffect } from "react";

const LatestBlogs = () => {
  const navigate = useNavigate();

  const [AllBlogs, setAllBlogs] = useState(null);

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
      <div className="mt-32 text-center">
        <h1 className="text-3xl font-kanit md:text-4xl">
          Latest on Your{" "}
          <span className="font-kanit text-transparent bg-gradient-to-l from-[#4a7999] via-[#5b99c3] to-[#4c8db8] bg-clip-text">
            MentorHeal
          </span>{" "}
          Blog
        </h1>
      </div>
      <section className="flex justify-center gap-20 pt-5 pb-10 bg-white flex-wrap">
        {AllBlogs?.map((blog, index) => {
          return (
            <React.Fragment key={index}>
              <Link
                className="max-w-sm p-2 space-y-2 cursor-pointer md:max-w-md lg:max-w-lg"
                to={`/blog/${blog.id}`}
              >
                <div>
                  <div>
                    <img
                      src={blog.data.image}
                      className="rounded-md aspect-video h-64 mx-auto object-cover object-center"
                      alt={blog.data.title}
                    />
                  </div>
                  <br />
                  <div>
                    <h1 className="font-semibold text-xl font-kanit">
                      {blog.data.title}
                    </h1>
                  </div>
                </div>
                <div>
                  <p className="text-justify text-gray-700 text-ellipsis line-clamp-3">
                    {blog.data.BlogSections[0].SectionPara}
                  </p>
                </div>
                <div className="text-[#475569]">
                  {blog.data.reactions} people found it useful
                </div>
              </Link>
            </React.Fragment>
          );
        })}
      </section>
      <div className="flex justify-center ">
        <Link to="/blog">
          <button className="py-3  text-white px-9 bg-[#4a7999] rounded-3xl font-kanit">
            Read More Articles
          </button>
        </Link>
      </div>
    </>
  );
};

export default LatestBlogs;
