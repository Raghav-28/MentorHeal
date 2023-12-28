import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../config/firebase";
import NavBar from "./NavBar";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/mentors");
  }, [user, loading]);

  return (
    <>
      <NavBar />
      <div className="register">
        <div className="text-center">
          <h1 className="text-5xl text-[#5D9ABF]">Create new account</h1>
          <div className="mt-2">
            Already registered?{" "}
            <Link to="/login">
              <span className="underline">Login</span>
            </Link>
          </div>
        </div>
        <br />
        <div className="register__container flex flex-col items-center gap-3 ">
          <div>
            <div className="tracking-wider">NAME</div>
            <input
              type="text"
              className="register__textBox p-3 rounded-sm w-64 border-solid border border-black"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
            />
          </div>

          <div>
            <div className="tracking-wider">EMAIL</div>
            <input
              type="email"
              className="register__textBox rounded-sm w-64 p-3 border-solid border border-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
            />
          </div>

          <div>
            <div className="tracking-wider">PASSWORD</div>
            <input
              type="password"
              className="register__textBox rounded-sm w-64 p-3 border-solid border border-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>

          <button
            className="register__btn font-bold w-1/12 bg-[#44708C] text-white text-lg mt-6 p-3"
            onClick={handleRegister}
          >
            Sign up
          </button>

          {/* <div className="flex flex-row">
          <div className="text-xs">
            <span>OR</span>
          </div>
        </div> */}
          <div className="relative flex py-1 items-center bg-white w-1/5">
            <div className="flex-grow border-t-2 border-[#5D9ABF]"></div>
            <span className="flex-shrink mx-2 text-black">OR</span>
            <div className="flex-grow border-t-2 border-[#5D9ABF]"></div>
          </div>
          <button
            className="register__btn register__google bg-[#E7E9EC] w-1/5 rounded-2xl p-4 text-xl text-black border-solid border-2 border-black"
            onClick={signInWithGoogle}
          >
            <GoogleIcon fontSize="large" /> &nbsp; Continue with Google
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
