import { useContext } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { mentorsContext } from "./context";

const HeroSection = ({ mentors }) => {
  const [user, loading, error] = useAuthState(auth);
  const [sorting, setSorting] = useContext(mentorsContext);
  // console.log(mentor)
  return (
    <div className="2xl:mx-40 xl:mx-24 lg:mx-16 md:mx-16 sm:mx-16 pt-20 bg-[]">
      <div className=" space-y-5 text-center text-black"></div>
      <div className=" flex flex-row justify-between mt-8 ">
        <div>Sort by</div>
        <div className="flex flex-row gap-6">
          <button
            onClick={() => {
              setSorting({ type: "insert", mentors: mentors });
              setSorting({ type: "name" });
            }}
          >
            Name
          </button>
          <button
            onClick={() => {
              setSorting({ type: "insert", mentors: mentors });
              setSorting({ type: "rating" });
            }}
          >
            Rating
          </button>
          <button
            onClick={() => {
              setSorting({ type: "insert", mentors: mentors });
              setSorting({ type: "sessions" });
            }}
          >
            No of sessions
          </button>
        </div>
      </div>

      <div className=" flex flex-row justify-between mt-8">
        <h1 className="text-5xl ">{mentors.length} Mentors found</h1>
        <Link
          className="max-w-max max-h-max font-bold text-xl px-5 py-3 bg-[#4a7999] text-white duration-300 ease-in-out rounded-full md:px-5 lg:px-6  border-2"
          to={user ? "/session" : "/login"}
        >
          Book a session
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
