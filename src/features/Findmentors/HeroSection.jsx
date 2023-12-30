import { Link } from "react-router-dom";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const HeroSection = ({ mentors }) => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="pt-20 bg-[]">
      <div className=" space-y-5 text-center text-black"></div>
      <div className="mx-40 flex flex-row justify-between mt-8 ">
        <div>Sort by</div>
        <div className="flex flex-row gap-6">
          <div>Name</div>
          <div>Rating</div>
          <div>No of sessions</div>
        </div>
      </div>

      <div className="mx-40 flex flex-row justify-between mt-8">
        <h1 className="text-5xl ">{mentors.length} Mentors found</h1>
        <Link
          className="font-bold text-xl px-5 py-3 bg-[#4a7999] text-white duration-300 ease-in-out rounded-lg md:px-5 lg:px-6  border-2"
          to={user ? "/session" : "/login"}
        >
          Book a session
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
