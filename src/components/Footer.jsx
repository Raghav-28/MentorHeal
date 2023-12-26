import { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { Carddata } from "./";
import { FaXTwitter } from "react-icons/fa6";
import { Instagram, LinkedIn, YouTube } from "@mui/icons-material";
// import { mainLogo } from "../assets";

const Footer = ({ Scrolltoref }) => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "newsletter"), {
        email: email.toLowerCase(),
        active: true,
        date: new Date(),
        source: window.location.href,
      });
      alert("success");
      setEmail("");
    } catch (error) {
      console.log(error);
    }
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
                <p className="mx-auto mb-5 text-3xl font-kanit text-transparent bg-gradient-to-l from-[#77b3db] via-[#65a6d1] to-[#5ba4d4] bg-clip-text md:text-4xl">
                  MentorHeal
                </p>
                {/* <img src={mainLogo} alt="" /> */}
              </Link>
            </div>
            <div className="text-xs text-center text-white lg:text-sm">
              <p className="leading-5 font-kanit">
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
                  Subscribe Now!
                </button>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex flex-wrap mb-6 items-top">
              <div className="w-full px-4 ml-auto lg:w-4/12">
                <span className="block mb-2 text-sm text-white uppercase font-kanit">
                  More
                </span>
                <ul className="text-[#dde5f1] list-unstyled space-y-4 my-6 cursor-pointer ">
                  <li className="font-kanit">
                    <Link to={"/about"}>About Us</Link>
                  </li>
                  <li className="font-kanit">
                    <Link to={"/how"}>How it works</Link>
                  </li>
                  <li className="font-kanit">
                    <Link to={"/join"}>Join as Mentor</Link>
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
          <a href="https://www.linkedin.com/company/mentoheal/">
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

      <hr className="my-6 dark:bg-gray-400 border-0 h-[1.5px]" />
      <div className="flex flex-wrap items-center justify-center md:justify-between">
        <div className="w-full px-4 mx-auto text-center md:w-4/12">
          <div className="py-1 text-sm text-white font-kanit">
            Copyright © <span id="get-current-year">2023</span>
            <a href="/">MentorHeal</a>
          </div>
        </div>
      </div>
      <hr className="my-6 dark:bg-gray-400 border-0 h-[1.5px]" />
      <div className="text-[#dde5f1] bg-cyan-700 py-5 px-5 lg:px-20 mx-10 lg:mx-20 rounded-lg font-kanit text-sm lg:leading-10">
        <p>
          Disclaimer: We are diligently refining our prototype services, eagerly
          preparing for the highly anticipated launch announcement. Stay tuned
          for exciting updates as we shape the future of our industry!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
