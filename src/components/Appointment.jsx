import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Appointment = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="mt-28 shadow-md w-full mx-auto bg-[#4a7999] p-8 border-b-2 border-white">
      <section className="flex flex-col text-center text-white lg:flex-row md:items-center md:justify-around space-y-7 lg:space-y-0">
        <div className="md:max-w-[40vw] md:text-left md:text-3xl space-y-4 lg:space-y-6">
          <h1 className="text-xl text-white font-kanit lg:text-3xl">
            Ready to make a leap to the best of you?
          </h1>
          <p className="text-lg lg:text-xl font-kanit">
            Be the change you wish to see in yourself.
          </p>
        </div>
        <div className="md:max-w-lg">
          <Link
            to={user ? "/session" : "/login"}
            className="py-2 text-sm tracking-wide text-black bg-white rounded-full font-kanit px-7"
          >
            Book Your Session
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
