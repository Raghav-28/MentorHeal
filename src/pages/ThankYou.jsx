import { FaCircleCheck } from "react-icons/fa6";

const ThankYou = () => {
  return (
    <div className="border-dotted	border-black border flex justify-center items-center w-full h-full">
      <div
        className="sm:w-6/12 sm:h-2/5 md:max-w-fit  md:p-16 w-2/3 h-96 2/5 px-4 border-solid rounded-md drop-shadow-lg border-0 border-gray-600 text-center flex flex-col justify-center items-center gap-4
        top-0 right-0 left-0 bottom-0 m-auto bg-white absolute"
      >
        <div>
          <FaCircleCheck
            className="flex justify-center mt-0"
            size={64}
            color="#4a7999"
          />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold	">
          {" "}
          Thank you!
        </h1>
        <div className="text-lg font-normal ">
          Payment recieved! <br /> Your booking is confirmed! <br /> Our team
          will get in touch with you within 24 hours{" "}
        </div>
        <button className="max-w-fit mb-0 font-bold sm:text-xl text-base  py-3 bg-[#4a7999] text-white duration-300 ease-in-out rounded-full px-5  border-2">
          Go home{" "}
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
