import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link to="/community">
      <div>
        <button className="px-5 py-2 text-sm font-semibold text-white duration-500 ease-in-out rounded-full bg-cyan-400">
          Join the Community
        </button>
      </div>
    </Link>
  );
};

export default Button;
