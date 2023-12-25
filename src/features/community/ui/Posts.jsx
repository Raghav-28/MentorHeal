import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Loader } from "../../../components";

const Posts = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "POSTS"));
        const posts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(posts);
        setloading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-2  mx-auto space-y-5  w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[40vw] mt-7">
      <div className="flex flex-col gap-5">
        {loading ? (
          <Loader text={"Please wait...."} />
        ) : (
          data?.map((item, i) => {
            return (
              <React.Fragment key={i}>
                <div
                  className="border-[1px] border-gray-300 p-5 cursor-pointer rounded-md"
                  onClick={() => {
                    navigate(`/queries/${item.id}`, {
                      state: {
                        q: item?.ask,
                        comment: item?.comment,
                        pic: item?.pic,
                      },
                    });
                  }}
                >
                  <div className="flex items-start justify-start gap-5 ">
                    <img
                      src={item.pic}
                      alt=""
                      className="rounded-full w-7 h-7"
                    />
                    <h1 className="text-[1rem] md:text-lg font-bold">
                      {item.ask}
                    </h1>
                  </div>
                </div>
              </React.Fragment>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Posts;
