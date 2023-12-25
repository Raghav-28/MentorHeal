import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../../config/firebase";
import { addDoc } from "firebase/firestore";
import { doc, getDoc, collection } from "firebase/firestore";
import { BsPeople } from "react-icons/bs";

const Ask = ({ setpopup }) => {
  const [data, setData] = useState({
    ask: "",
    pic: "",
    Name: "",
  });

  const token = localStorage.getItem("userToken");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.ask === "") {
      return;
    }
    if (token) {
      try {
        const postsCollection = collection(db, "POSTS");
        await addDoc(postsCollection, data);
        setpopup(false);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please signup");
      navigate("/signup");
    }
  };

  //get user image and Name
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const postRef = doc(db, "USERS", token);
        const User = await getDoc(postRef);
        setData({
          ...data,
          pic: User.data().pic,
          Name: User.data().Name,
        });
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    fetchComments();
    window.scrollTo(0, 0);
  }, [token]);

  return (
    <div className="pl-2 mt-6 space-y-2">
      <div className="flex items-center gap-3">
        <img
          src={
            data.pic
              ? data.pic
              : "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg"
          }
          alt=""
          className="rounded-full w-7 h-7"
        />
        <button className="text-sm font-semibold text-gray-500 flex items-center gap-2 border-[1px] rounded-full px-8 py-2">
          <h1>{data.Name}</h1>
          <BsPeople size={20} color="gray" />
        </button>
      </div>
      <textarea
        cols={20}
        rows={6}
        type="text"
        value={data.ask}
        onChange={(e) => {
          setData({
            ...data,
            ask: e.target.value,
          });
        }}
        className=" mx-auto md:text-lg w-[70vw] sm:w-[60vw] md:w-[50vw] lg:w-[45vw] text-sm  border-b-2 border-gray-300 outline-none"
        placeholder="Start your questions with What,why etc"
      />
      <div className="flex justify-end gap-5">
        <button
          onClick={() => {
            setpopup(false);
          }}
          className="px-5 font-semibold text-white cursor-pointer  bg-cyan-400 py-1.5 rounded-full"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="px-5 font-semibold text-white cursor-pointer bg-cyan-400  py-1.5 rounded-full"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Ask;
