import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Loader } from "./";

const Blogs = () => {
  const navigate = useNavigate();
  const [blogsData, setBlogsData] = useState([{ id: "", data: {} }]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = collection(db, "BLOGS");
        const querySnap = await getDocs(collectionRef);
        const blogsData = [];
        querySnap.forEach((doc) => {
          if (doc.exists()) {
            blogsData.push({ id: doc.id, data: doc.data() });
          }
        });
        setBlogsData(blogsData);
      } catch (error) {
        console.error("Error fetching data: ", error);
        navigate("/");
      }
      setloading(false);
    };
    fetchData();
  }, [navigate]);

  return (
    <main>
      <div className="pt-20 text-center">
        <h1 className="font-kanit text-transparent bg-gradient-to-l from-[#4a7999] via-[#5b99c3] to-[#4c8db8] bg-clip-text text-6xl md:text-3xl">
          Latest Blogs
        </h1>
      </div>
      <div className="flex justify-center gap-20 pt-5 pb-10 bg-white flex-wrap">
        {loading ? (
          <Loader />
        ) : (
          blogsData?.map((blog) => {
            return (
              <Link
                key={blog.id}
                className="max-w-sm p-5 space-y-2 cursor-pointer md:max-w-md lg:max-w-lg"
                to={`/blog/${blog.id}`}
              >
                <div>
                  <div>
                    <img
                      src={blog.data.image}
                      className="rounded-md"
                      alt={blog.data.title}
                    />
                  </div>{" "}
                  <br />
                  <div>
                    <h1 className="font-semibold text-2xl font-kanit">
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
            );
          })
        )}
      </div>
    </main>
  );
};

export default Blogs;
