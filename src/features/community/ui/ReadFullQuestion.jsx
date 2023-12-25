import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { Footer, Loader } from "../../../components";
import { ReplyModel } from "../../";
import { FiEdit } from "react-icons/fi";
import { BsPeople } from "react-icons/bs";

const ReadFullQuestion = () => {
  const data = useLocation();
  // const user = JSON.parse(localStorage.getItem("user"));
  const [Reply, setReply] = useState(false);
  const [Comments, setComments] = useState();
  const [loading, setloading] = useState(true);
  const { postid } = useParams();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const postRef = doc(db, "POSTS", postid);
        const postSnapshot = await getDoc(postRef);
        setComments(postSnapshot.data()?.comments);
        setloading(false);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    fetchComments();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="p-2 pb-14 mx-auto space-y-5  w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[40vw] mt-7">
        <div className="flex flex-col gap-5">
          <div className="border-[1px] rounded-md border-gray-200 p-5  cursor-pointer">
            <div className="flex items-start justify-start gap-5">
              <img
                src={data?.state?.pic}
                alt=""
                className="rounded-full w-7 h-7"
              />
              <h1 className="text-[1rem] md:text-lg font-bold">
                {data?.state?.q}
              </h1>
            </div>
            <div className="flex items-end justify-end text-[#8c8d8e] font-semibold mt-4">
              <div
                className="flex items-center gap-3"
                onClick={() => {
                  setReply(true);
                }}
              >
                <FiEdit size={21} color="gray" />
                <h1 className="text-sm font-semibold cursor-pointer">Reply</h1>
              </div>
            </div>
          </div>
          <ul className=" flex flex-col mt-2.5 gap-2">
            {loading ? (
              <Loader text={"Loading..."} />
            ) : (
              Comments?.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="flex flex-col gap-5 border-[1px] cursor-pointer border-gray-200 rounded-md  p-4"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.pic}
                        alt=""
                        className="rounded-full w-7 h-7"
                      />
                      <h1 className="text-sm font-semibold text-gray-700">
                        {item.Name}
                      </h1>
                      <BsPeople size={20} color="gray" />
                    </div>
                    <div className="mt-2 ">
                      <p>{item.Postcomment}</p>
                    </div>
                    {item?.mentorjwt ? (
                      <div className="flex justify-end">
                        <h1 className="text-lg font-bold text-transparent bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 bg-clip-text">
                          Mentor
                        </h1>
                      </div>
                    ) : null}
                  </div>
                );
              })
            )}
          </ul>
        </div>
      </div>
      <Footer />
      {Reply ? <ReplyModel setReply={setReply} /> : null}
    </>
  );
};

export default ReadFullQuestion;
