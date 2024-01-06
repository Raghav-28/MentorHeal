import React, { useRef, useState } from "react";
import { NavBar } from "../components";
import { Data } from "../data";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const FAQs = ({ Q, children }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className=" border-b-[1px]  w-[80vw]  px-4 py-5 md:px-8 md:py-8 space-y-4 ">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={toggle}
        >
          <h1 className="font-semibold md:text-xl ">{Q}</h1>
          <p>{open ? <ExpandLess /> : <ExpandMore />}</p>
        </div>
        <div
          style={{
            maxHeight: open ? "2000px" : "0",
            overflow: "hidden",
            transition: "max-height 2s ease-in-out",
          }}
        >
          {open && <p className="font-semibold">{children}</p>}
        </div>
      </div>
    </>
  );
};

const MentorShipPage = () => {
  const formref = useRef(null);

  const handlescroll = () => {
    formref.current.scrollIntoView({
      behaviour: "smooth",
    });
  };

  const data = [
    {
      Q: "How do I choose the right mentor for me?",
      Ans: "When choosing a mentor, explore their profiles to find someone who aligns with your goals, values, and experiences. Consider their expertise, background, and areas of specialisation to ensure a good fit for your personal growth journey. ",
    },
    {
      Q: "How often should I schedule 1-on-1 video sessions with my mentor?",
      Ans: "The frequency of sessions depends on your needs and preferences. It is common to schedule sessions weekly, biweekly, or monthly. Discuss with your mentor to determine a schedule that works best for both of you. ",
    },
    {
      Q: "What can I expect during a mentoring session?",
      Ans: "Mentoring sessions provide a safe and supportive space for open conversations. You can discuss your challenges, aspirations, and desired outcomes. Your mentor will actively listen, provide guidance, and share insights to help you on your personal growth journey.",
    },
    {
      Q: "How long does it take to see results from mentorship?",
      Ans: "The timeline for results varies for each individual and depends on factors such as the nature of your goals, your commitment to implementing guidance, and the complexity of your challenges. Remember that personal growth is a continuous process, and progress may be gradual but transformative.",
    },
  ];

  return (
    <>
      <NavBar />
      {/* Herosection-1 */}
      <div className="bg-[#f9f9f9] flex flex-col lg:flex-row lg:justify-evenly justify-center items-center  pt-28 px-5 pb-8 lg:shadow-sm">
        <div>
          <img
            src="https://images.pexels.com/photos/6325984/pexels-photo-6325984.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="img1"
            className=" md:max-w-md lg:max-w-xl grayscale"
          />
        </div>
        <div className="max-w-md pl-3 mt-5 lg:max-w-">
          <h1 className="text-3xl font-bold lg:text-5xl">
            The Mentors Network
          </h1>
          <p className="text-[#6d6667] my-4 text-lg ">
            MentorHeal is an innovative platform dedicated to fostering academic
            and personal growth by connecting students with experienced mentors.
          </p>
          <p className="my-4 text-[#6d6667] text-lg ">
            One of MentorHeal's standout features is its seamless integration of
            video calling, providing a face-to-face interaction that transcends
            traditional mentorship boundaries.
          </p>
          <button
            onClick={handlescroll}
            className="flex items-center justify-center px-6 py-2 mt-6 space-x-2 font-semibold text-white duration-500 ease-in-out rounded-full bg-cyan-400 "
          >
            <h1>Join the Mentor Network</h1>
            <LiaGreaterThanSolid size={18} color="white" />
          </button>
        </div>
      </div>
      {/* Why join the Peer network? */}
      <section className="flex flex-col items-center justify-center my-8 gap-5 px-5 lg:flex-none lg:w-[70vw] mx-auto lg:space-y-20">
        {Data.map((_, i) => {
          return (
            <React.Fragment key={i}>
              <div className="flex flex-col items-start justify-start gap-3 lg:flex-row lg:gap-24 lg:items-end lg:justify-end">
                <div
                  className={`max-w-md lg:max-w-xl  ${
                    (i + 1) % 2 == 0 ? "lg:order-2" : "null"
                  } `}
                >
                  <img src={_.image} alt="" className="lg:w-[85vw] grayscale" />
                </div>
                <div className="max-w-md space-y-3">
                  <h1 className="flex items-center mt-5 space-x-2 lg:text-xl">
                    <span className="font-bold text-slate-800">{i + 1}.</span>
                  </h1>
                  <h1 className="text-xl font-bold lg:text-3xl">{_.Tittle}</h1>
                  <p className=" text-[#6d6667] ">{_.Para}</p>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </section>
      <section className="flex flex-col items-center justify-center">
        {data.map((item, index) => {
          return (
            <div key={index} className="py-4">
              <FAQs key={index} Q={item.Q}>
                <p className="text-[#7c7c7c] max-w-2xl text-sm md:text-md lg:text-lg">
                  {item.Ans}
                </p>
              </FAQs>
            </div>
          );
        })}
      </section>
      {/* fef2ef */}
      {/* Join our network! */}
      {/* <section className="my-8">
        <div className="bgclip bg-cyan-500 ml-6 py-14 px-2 pl-3 lg:pl-28 w-[90vw] lg:w-[80vw] lg:mx-auto">
          <div className="max-w-xs space-y-6 text-white lg:max-w-xl">
            <p className="w-48 text-lg lg:text-2xl font- lg:w-auto ">
              Believe in the power of lived-experience sharing?
            </p>
            <h1 className="text-xl font-semibold lg:text-4xl">
              Join our growing Peer network!
            </h1>
            <button className="py-2 text-sm tracking-wide text-black bg-white rounded-full px-7">
              <Link
                to="/Mentor-Ship-Page/form"
                className="flex items-center justify-center space-x-5 "
              >
                <h1 className="text-sm font-semibold">Get Started</h1>
              </Link>
            </button>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default MentorShipPage;
