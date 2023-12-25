import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { BsPeople } from "react-icons/bs";
import { Loader } from "../../components";

const ReplyModel = ({ setReply }) => {
  const { postid } = useParams();
  const navigate = useNavigate();
  const mentorjwt = localStorage.getItem("mentorjwt");
  const [loading, setloading] = useState(false);
  const [userimg, setuserimg] = useState();
  const token = localStorage.getItem("userToken");
  const [data, setData] = useState({
    Postcomment: "",
    mentorjwt: mentorjwt,
    pic: "",
    Name: "",
  });

  //get user image
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const postRef = doc(db, "USERS", localStorage.getItem("userToken"));
        const User = await getDoc(postRef);
        setuserimg(User.data().pic);
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
  }, []);

  const PostComment = async () => {
    setloading(true);
    if (token) {
      try {
        const postRef = doc(db, "POSTS", postid);
        const postSnapshot = await getDoc(postRef);
        if (postSnapshot.exists()) {
          const post = postSnapshot.data();
          const comments = post.comments || [];
          comments.push(data);
          await updateDoc(postRef, {
            comments: comments,
          });
          setReply(false);
          setloading(false);
          navigate("/community");
        } else {
          console.log("Document does not exist");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please Signup");
      navigate("/signup");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-full p-3 overflow-y-scroll bg-black bg-opacity-70 backdrop-blur">
      <div className="p-6 space-y-2 bg-white">
        <div className="flex items-center gap-3">
          <img
            src={
              userimg !== undefined
                ? userimg
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
          cols={7}
          rows={2}
          value={data.Postcomment}
          onChange={(e) => {
            setData({
              ...data,
              Postcomment: e.target.value,
            });
          }}
          type="text"
          className="mx-auto text-lg w-[70vw] sm:w-[60vw] md:w-[50vw] lg:w-[45vw]  border-b-2 border-gray-300 outline-none"
          placeholder="Reply"
        />
        <div className="flex justify-end gap-3 text-sm">
          <button
            onClick={() => {
              setReply(false);
            }}
            className="px-5 font-semibold text-white cursor-pointer bg-gradient-to-l from-cyan-400 via-cyan-400 to-cyan-300 py-1.5 rounded-full"
          >
            Cancel
          </button>
          <button
            onClick={PostComment}
            className="px-5 font-semibold text-white cursor-pointer bg-gradient-to-l from-cyan-400 via-cyan-400 to-cyan-300 py-1.5 rounded-full"
          >
            Submit
          </button>
        </div>
      </div>
      {loading ? <Loader text={"Please wait...."} /> : null}
    </div>
  );
};

export default ReplyModel;
