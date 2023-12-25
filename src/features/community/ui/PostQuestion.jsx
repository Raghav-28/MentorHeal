import { useState, useEffect } from "react";
import { AskModel } from "../../";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";

const PostQuestion = () => {
  const [popup, setpopup] = useState(false);
  const [category, setcategory] = useState();
  const [userimg, setuserimg] = useState({
    pic: "",
  });

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const postRef = doc(db, "USERS", localStorage.getItem("userToken"));
        const User = await getDoc(postRef);
        setuserimg(User.data().pic);
        setuserimg({
          ...userimg,
          pic: User.data().pic,
        });
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    fetchUserDetails();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const postRef = doc(db, "USERS", localStorage.getItem("userToken"));
        const User = await getDoc(postRef);
        setuserimg(User.data().pic);
        console.log(userimg);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    fetchComments();
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24">
      <div className="p-5 border-[1px] border-gray-300  rounded-md mx-auto space-y-5  w-[90vw]  md:w-[60vw] lg:w-[40vw]">
        <div className="flex items-center gap-2.5 justify-center">
          <img
            src={
              userimg.pic
                ? userimg.pic
                : "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg"
            }
            alt=""
            className="rounded-full w-7 h-7"
          />
          <input
            type="text"
            placeholder="What do you want to ask "
            className="py-2 outline-none border-[1px] border-slate-300 px-10 w-[70vw]  md:w-[60vw] lg:w-[50vw] cursor-pointer rounded-full"
            onClick={() => {
              setpopup(true);
              setcategory("Ask");
            }}
          />
        </div>
        <div className="flex items-center justify-evenly text-[#8c8d8e] font-semibold">
          <div
            onClick={() => {
              setpopup(true);
              setcategory("Ask");
            }}
          >
            <h1 className="font-bold cursor-pointer">Ask</h1>
          </div>
          |
          <div
            onClick={() => {
              setpopup(true);
              setcategory("Post");
            }}
          >
            <h1 className="font-bold cursor-pointer">Post</h1>
          </div>
        </div>
      </div>
      {popup ? (
        <AskModel
          category={category}
          setcategory={setcategory}
          setpopup={setpopup}
        />
      ) : null}
    </main>
  );
};

export default PostQuestion;
