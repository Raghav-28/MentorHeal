import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import GoogleIcon from "@mui/icons-material/Google";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;

    if (user) navigate("/mentors");
  }, [user, loading]);

  return (
    <div className="login">
      <h1 className=" text-center text-5xl text-[#5D9ABF] mb-2">Login</h1>
      <div className="login__container flex flex-col gap-4 items-center">
        <div>
          <div className="tracking-wider">EMAIL</div>
          <input
            type="text"
            className="login__textBox p-3 rounded-sm w-64 border-solid border border-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
        </div>

        <div>
          <div className="tracking-wider">PASSWORD</div>
          <input
            type="password"
            className="login__textBox p-3 rounded-sm w-64 border-solid border border-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <div className="text-xs text-right">
            <Link to="/reset">Forgot Password?</Link>
          </div>
        </div>

        <button
          className="login__btn font-bold w-1/12 bg-[#44708C] text-white text-lg mt-6 p-3"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <div className="relative flex py-1 items-center bg-white w-1/5">
          <div className="flex-grow border-t-2 border-[#5D9ABF]"></div>
          <span className="flex-shrink mx-2 text-black">OR</span>
          <div className="flex-grow border-t-2 border-[#5D9ABF]"></div>
        </div>
        <button
          className="login__btn login__google bg-[#E7E9EC] w-1/5 rounded-2xl p-4 text-xl text-black border-solid border-2 border-black"
          onClick={signInWithGoogle}
        >
          <GoogleIcon fontSize="large" /> &nbsp; Continue with Google
        </button>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Login;
