import { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { server } from "../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Carddata } from "./";
import { FaXTwitter } from "react-icons/fa6";
import { Instagram, LinkedIn, YouTube } from "@mui/icons-material";
// import { mainLogo } from "../assets";

const Footer = ({ Scrolltoref }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const year = new Date().getFullYear();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "newsletter"), {
        email: email.toLowerCase(),
        active: true,
        date: new Date(),
        source: window.location.href,
      });
      server.post("/api/mail/send-newsletter-confirmation", {
        name: "Mentorheal Subscriber",
        email: email.toLowerCase(),
      });
      toast.success("Subscribed successfully! 🎉");
      setEmail("");
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <footer className="relative py-8 text-sm text-center bg-[#4a7999]">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full px-4 text-center text-black lg:w-6/12">
            <div>
              <Link
                to="/"
                className="flex"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <p className="mx-auto mb-5 text-3xl text-transparent bg-gradient-to-r from-white via-[#b2d6ee] to-white bg-clip-text md:text-4xl">
                  MentorHeal
                </p>
                {/* <img src={mainLogo} alt="" /> */}
              </Link>
            </div>
            <div className="text-xs text-center text-white lg:text-sm">
              <p className="leading-5 font-kanit md:mx-4">
                MentorHeal is the holistic wellness mentorship platform where we
                connect the mentees with experienced, qualified and certified
                mentors across the country.
              </p>
            </div>
            <div className="py-12 space-y-8">
              <form
                onSubmit={handleSubscribe}
                className="items-center justify-center space-x-2 space-y-4 md:flex md:space-y-0"
              >
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  className="px-6 py-3 leading-tight text-gray-700 border shadow appearance-none rounded-3xl w-54 md:w-64 focus:outline-none focus:shadow-outline"
                />
                <button className="px-6 py-3 bg-[#5789aa] text-white border-white border-2 font-kanit rounded-full">
                  {!loading ? "Subscribe Now!" : "Subscribing..."}
                </button>
                <ToastContainer />
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex flex-wrap mb-6 items-top">
              <div className="w-full px-4 ml-auto lg:w-4/12">
                <span className="block mb-2 text-sm text-white uppercase font-kanit">
                  Mentorheal
                </span>
                <ul className="text-[#dde5f1] list-unstyled space-y-4 my-6 cursor-pointer ">
                  <li>
                    <Link to={"/about"}>About Us</Link>
                  </li>
                  <li>
                    <Link to={"/how"}>How it works</Link>
                  </li>
                  <li>
                    <Link to={"/join-as-mentor"}>Join as Mentor</Link>
                  </li>
                </ul>
              </div>
              <div className="w-full px-4 ml-auto lg:w-4/12">
                <span className="block mb-2 text-sm text-white uppercase font-kanit">
                  Mentorship Options
                </span>
                <ul className="text-[#dde5f1] list-unstyled space-y-3 my-6 cursor-pointer">
                  {Carddata.map((item, index) => {
                    return (
                      <li className="cursor-pointer font-kanit" key={index}>
                        {" "}
                        <Link
                          key={index}
                          to={`/${item.Title}`}
                          state={{
                            Title: item.Title,
                            Background: item.Background,
                            Blog: item.Blog,
                          }}
                        >
                          {item.Title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <span className="block mb-2 text-sm text-white uppercase font-kanit">
                  Other Resources
                </span>
                <ul className="text-[#dde5f1] list-unstyled space-y-4 my-6 cursor-pointer">
                  <li>Support</li>
                  <li>Terms &amp; Conditions</li>
                  <li>Privacy Policy</li>
                  <li onClick={Scrolltoref} className="font-kanit">
                    Contact Us{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* social icons .... */}
        <div className="flex items-center justify-center space-x-6 cursor-pointer [&>a]:p-1 [&>a]:bg-white [&>a]:rounded-full">
          <a href="https://www.linkedin.com/company/mentorheal/">
            <LinkedIn style={{ color: "#1DA1F2" }} fontSize="large" />
          </a>
          <a href="https://instagram.com/mentorheal_forlife">
            <Instagram style={{ color: "#C13584" }} fontSize="large" />
          </a>
          <a href="https://x.com/MentorHeal">
            <FaXTwitter color="" size={28} />
          </a>
          <a href="https://youtube.com/@MentorHealOfficial">
            <YouTube style={{ color: "#CD201F" }} fontSize="large" />
          </a>
        </div>
      </div>

      <hr className="my-6 bg-white border-0 h-[1.5px]" />

      <div className="flex flex-wrap items-center justify-center md:justify-between">
        <div className="w-full px-4 mx-auto text-center md:w-4/12">
          <div className="py-1 text-sm text-white font-kanit">
            Copyright © <span id="get-current-year">{year}</span>
            <a href="/">MentorHeal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
