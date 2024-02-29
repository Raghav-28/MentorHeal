import { spinner } from "../assets";

const Loader = ({ text }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-full p-3 overflow-y-scroll backdrop-blur-sm">
      <div className="flex flex-col items-center">
        <img src={spinner} alt="loading" />
        {text && (
          <h6 className="text-[#4a7999] font-semibold text-lg">{text}</h6>
        )}
      </div>
    </div>
  );
};

export default Loader;
