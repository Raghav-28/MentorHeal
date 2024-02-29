import { Link } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";

const ThankYou = () => {
  return (
    <div className="flex justify-center items-center w-dvw h-dvh">
      <div className="h-dvh w-dvw md:w-8/12 md:h-auto md:max-w-fit md:p-12 px-6 border-solid rounded-md shadow-2xl drop-shadow-xl md:border-t border-gray-200 text-center flex flex-col justify-center items-center gap-4 m-auto bg-white">
        <div>
          <FaCircleCheck
            className="rounded-full shadow-lg"
            size={64}
            color="#4a7999"
          />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Thank you!
        </h1>
        <div className="text-lg">
          Payment received! <br /> Your booking is confirmed! <br /> Our team
          will get in touch with you within 24 hours.
        </div>
        <Link
          to="/"
          className="max-w-fit mb-0 font-bold sm:text-xl text-base py-3 md:py-2 bg-[#4a7999] text-white duration-300 ease-in-out rounded-full px-6 shadow-lg hover:shadow-xl"
        >
          Go back to home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
