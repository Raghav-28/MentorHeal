import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import Loader from "./Loader";

const Blogs = () => {
  const navigate = useNavigate();
  const [AllBlogs, setAllBlogs] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = collection(db, "BLOGS");
        const querySnapshot = await getDocs(collectionRef);
        const blogsData = [];
        querySnapshot.forEach((doc) => {
          if (doc.exists()) {
            blogsData.push(doc.data());
          }
        });
        setAllBlogs(blogsData);
        setloading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <NavBar />
      <div className="pt-20 text-center">
        <h1 className="font-kanit text-transparent bg-gradient-to-l from-[#4a7999] via-[#5b99c3] to-[#4c8db8] bg-clip-text text-6xl md:text-3xl">
          Latest Blogs
        </h1>
      </div>
      <div
        className="flex justify-center gap-20 pt-5 pb-10 bg-white flex-wrap
        "
        // md:grid md:grid-cols-2 lg:grid-cols-3 place-items-center md:px-10 - Isko rem, bc place-items-center causing moving down of item
      >
        {loading ? (
          <Loader />
        ) : (
          AllBlogs?.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div
                  className="max-w-sm p-5 space-y-2 cursor-pointer md:max-w-md lg:max-w-lg"
                  onClick={() => {
                    navigate(`/blog/${index}`, {
                      state: {
                        Tags: item.Category,
                        Blogimage: item.image,
                        BLogTitle: item.title,
                        Sections: item.BlogSections,
                        Reactions: item.reactions,
                      },
                    });
                  }}
                >
                  <div>
                    <div>
                      <img
                        src={item.image}
                        className="rounded-md"
                        alt={item.title}
                      />
                    </div>{" "}
                    <br />
                    <div>
                      <h1 className="font-semibold text-2xl font-kanit">
                        {item.title}
                      </h1>
                    </div>
                  </div>
                  <div>
                    <p className="text-justify text-gray-700">
                      {item.BlogSections[0].SectionPara.slice(0, 150)}
                      ...
                    </p>
                  </div>
                  <div className="text-[#475569]">
                    {item.reactions} people found it useful
                  </div>
                </div>
              </React.Fragment>
            );
          })
        )}
      </div>
    </main>
  );
};

export default Blogs;
