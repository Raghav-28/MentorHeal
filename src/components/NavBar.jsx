import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth, logout } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { ArrowDropDown, Menu } from "@mui/icons-material";
import { Carddata } from "./"; //Circular Import
import { mainLogo } from "../assets";

const NavBar = ({ Scrolltoref, Scrolltotestimonial }) => {
  // state handlers
  const mentorjwt = localStorage.getItem("mentorjwt");
  const [toggle, setToggle] = useState(false);
  const [dropdown, setdropdown] = useState(false);
  const [more, setMore] = useState(false);
  const [scroll, setScroll] = useState(false);

  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed w-screen shadow-sm border bg-white text-[#8ca1b3] z-50 md:px-8 ${
          scroll ? "shadow-md" : "shadow-none"
        }`}
      >
        <div className="flex justify-between items-center px-5 md:px-9 py-3.5 gap-4">
          <div>
            <Link
              to="/"
              className="flex"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <img src={mainLogo} className="w-52" alt="" />
            </Link>
          </div>
          <div className="items-center hidden lg:flex">
            <ul className="flex flex-row items-center mr-6 space-x-6 list-none md:text-sm">
              <li className="cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              {/* dropdown web..... */}
              <div className="flex flex-col">
                <li
                  onMouseEnter={() => setdropdown(!dropdown)}
                  className="cursor-pointer"
                >
                  Categories
                </li>

                {/* options....... */}
                <div
                  onMouseEnter={() => setdropdown(true)}
                  onMouseLeave={() => setdropdown(false)}
                  className={`${
                    dropdown ? "block" : "hidden"
                  } absolute bg-white shadow-md p-4 mt-8 rounded-lg`}
                >
                  <ul className="grid grid-cols-3 gap-3 font-normal ">
                    {Carddata.map((item, index) => {
                      return (
                        <li
                          className="transition duration-300 ease-in-out cursor-pointer"
                          key={index}
                        >
                          {" "}
                          <Link
                            key={index}
                            to={`/${item.Title}`}
                            state={{
                              title: item.Title,
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
              </div>

              <li className="cursor-pointer">
                <Link to={"/how"}> How it works </Link>
              </li>

              <li className="cursor-pointer">
                <Link to="/mentors">Mentors</Link>
              </li>

              {/* More...... */}
              <div>
                <li
                  onMouseEnter={() => {
                    setMore(!more);
                  }}
                  className="cursor-pointer"
                >
                  More
                </li>

                <div
                  onMouseEnter={() => setMore(true)}
                  onMouseLeave={() => setMore(false)}
                  className={`${
                    more ? "block" : "hidden"
                  } absolute bg-white shadow-md p-2 mt-3 rounded-lg`}
                >
                  <ul className="grid grid-cols-2 gap-3 p-3 ">
                    <li className="cursor-pointer">
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li className="cursor-pointer">
                      <Link to="/about">About us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              {user ? (
                <li
                  className="cursor-pointer bg-[#4a7999] px-6 py-2 rounded-full text-white"
                  onClick={logout}
                >
                  Logout
                </li>
              ) : (
                <li className="cursor-pointer bg-[#4a7999] opacity-95 hover:opacity-100 px-6 py-2 rounded-full text-white">
                  <Link to="/login"> Login </Link>
                </li>
              )}
              {mentorjwt ? null : (
                <li className="cursor-pointer bg-[#4a7999] opacity-95 hover:opacity-100 px-6 py-2 rounded-full text-white">
                  <Link to="/join-as-mentor">Join as Mentor</Link>
                </li>
              )}
            </ul>
          </div>

          {/* Mobile navbar ...... */}
          <div className="flex items-center justify-end lg:hidden">
            <button onClick={() => setToggle(!toggle)}>
              <Menu color="#00b8b3" />
            </button>

            {/* mobile menu...... */}
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 bg-white shadow-2xl rounded-xl absolute top-5 items-center justify-center mt-10`}
            >
              <ul className="flex flex-col gap-4 list-none lg:hidden">
                <li className="transition duration-300 ease-in-out cursor-pointer">
                  <Link to="/">Home</Link>
                </li>
                <li
                  onClick={() => {
                    setMore(!more);
                  }}
                  className="transition duration-300 ease-in-out cursor-pointer"
                >
                  Categories
                  <ArrowDropDown />
                </li>
                <div
                  className={`space-y-4 text-sm ${more ? "block" : "hidden"}`}
                >
                  <ul className="grid gap-3 font-normal ">
                    {Carddata.map((item, index) => {
                      return (
                        <li
                          className="transition duration-300 ease-in-out cursor-pointer"
                          key={index}
                        >
                          {" "}
                          <Link
                            key={index}
                            to={`/${item.Title}`}
                            state={{
                              title: item.Title,
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
                <li className="transition duration-300 ease-in-out cursor-pointerz">
                  <Link to={"/how"}>How it works</Link>
                </li>
                <li className="cursor-pointer">
                  <Link to="/mentors"> Mentors </Link>
                </li>

                <li
                  onClick={() => {
                    setdropdown(!dropdown);
                  }}
                  className="flex items-center space-x-1 cursor-pointer"
                >
                  <h1>More</h1>
                  <ArrowDropDown />
                </li>

                <div
                  className={` space-y-4 text-sm ${
                    dropdown ? "block" : "hidden"
                  }`}
                >
                  <Link to={"/about"}>
                    <p value="cursor-pointer transition ease-in-out duration-300">
                      About Us
                    </p>
                  </Link>
                  {user ? (
                    <li className="cursor-pointer" onClick={logout}>
                      Logout
                    </li>
                  ) : (
                    <li className="cursor-pointer">
                      <Link to="/login"> Login </Link>
                    </li>
                  )}
                  {mentorjwt ? null : (
                    <li value="cursor-pointer transition ease-in-out duration-300">
                      <Link to="/join-as-mentor">Join as Mentor</Link>
                    </li>
                  )}
                  <p value="cursor-pointer transition ease-in-out duration-300">
                    <Link to={"/blog"}>Blog</Link>
                  </p>
                  {/* <p value="cursor-pointer transition ease-in-out duration-300">
                    <Link to={"/community"}>community</Link>
                  </p> */}
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
