import { useId } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../../config/firebase";
import { doc, setDoc } from "firebase/firestore";
import { NavBar } from "../../components";
import { Google } from "@mui/icons-material";
import emailjs from "@emailjs/browser";

const Signup = () => {
  const GoogleProvider = new GoogleAuthProvider();

  const navigate = useNavigate();

  const UserToken = useId();

  const sendEmail = (email, name) => {
    emailjs
      .send(
        "service_m5ql7ex",
        "template_s697m1j",
        {
          from_name: "MentorHeal",
          to_name: name,
          from_email: "chrahulofficial@gmail.com",
          to_email: email,
          message:
            "A warm welcome to our mentor team at MentorHeal! We're excited to have you on board. Your expertise will be invaluable in guiding our team. Let's embark on this journey together!",
        },
        "pskEHJBdJUVoAlloz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const GoogleSignin = async () => {
    try {
      const res = await signInWithPopup(auth, GoogleProvider);
      const User = {
        Name: res.user.displayName,
        email: res.user.email,
        pic: res.user.photoURL,
      };
      const docRef = doc(db, "USERS", UserToken);
      await setDoc(docRef, User);
      localStorage.setItem("userToken", UserToken);
      sendEmail(User.email, User.Name);
      navigate("/community");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavBar />
      <main className="pt-36">
        <div>
          <div className="mt-11">
            <div className=" space-y-1.5 text-center">
              <h1 className="text-3xl font-kanit lg:text-5xl md:text-4xl">
                Get{" "}
                <span className="text-transparent bg-gradient-to-l from-[#4a7999] via-[#5b99c3] to-[#4c8db8] bg-clip-text">
                  Mentorship
                </span>
              </h1>
              <p className="text-[#676b5f] font-kanit md:text-lg">
                Sign Up for free!
              </p>
            </div>
            <div className="flex flex-col justify-center max-w-md mx-auto mt-8 space-y-8">
              <h2 className="text-[#676b5f]  text-center mx-auto max-w-md md:max-w-xl text-sm md:text-base font-kanit">
                By continuing, you agree to MentorHeal&apos;s Terms and
                Conditions and confirm you have read our Privacy Notice.
              </h2>
              <button
                className="flex items-center justify-center rounded-full space-x-3 border-[1px] hover:bg-[#eeefea] ease-in-out duration-500 border-slate-300 p-3 text-sm mx-5"
                onClick={GoogleSignin}
              >
                <Google fontSize="medium" />
                <h1 className="font-kanit">Sign up with Google</h1>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Signup;
