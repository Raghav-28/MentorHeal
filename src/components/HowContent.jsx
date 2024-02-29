import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Card } from "./Card";
import { chose, Find, Schedule, Set } from "../assets";

const FAQs = ({ Q, children }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="border-b-[1px] border-slate-300 px-4 py-5 md:px-8 space-y-3 w-[80vw]">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggle}
      >
        <h1 className="font-kanit md:text-xl">{Q}</h1>
        <p>{open ? <ExpandLess /> : <ExpandMore />}</p>
      </div>
      <div
        style={{
          maxHeight: open ? "2000px" : "0",
          overflow: "hidden",
          transition: "max-height 2s ease-in-out",
        }}
      >
        {open && <p className="font-kanit">{children}</p>}
      </div>
    </div>
  );
};

const HowContent = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const data = [
    {
      Q: "How do I choose the right mentor for me?",
      Ans: "When choosing a mentor, explore their profiles to find someone who aligns with your goals, values, and experiences. Consider their expertise, background, and areas of specialisation to ensure a good fit for your personal growth journey.",
    },
    {
      Q: "How often should I schedule 1-on-1 video sessions with my mentor?",
      Ans: "The frequency of sessions depends on your needs and preferences. It is common to schedule sessions weekly, biweekly, or monthly. Discuss with your mentor to determine a schedule that works best for both of you.",
    },
    {
      Q: "hat can I expect during a mentoring session?",
      Ans: "Mentoring sessions provide a safe and supportive space for open conversations. You can discuss your challenges, aspirations, and desired outcomes. Your mentor will actively listen, provide guidance, and share insights to help you on your personal growth journey.",
    },
    {
      Q: "How long does it take to see results from mentorship?",
      Ans: "The timeline for results varies for each individual and depends on factors such as the nature of your goals, your commitment to implementing guidance, and the complexity of your challenges. Remember that personal growth is a continuous process, and progress may be gradual but transformative.",
    },
  ];

  const howItWorks = [
    {
      image: Set,
      title: "Get Started: Set Up Your Account",
      para: "Unlock the door to your journey with just a few clicks.",
    },
    {
      image: chose,
      title: "Explore and Discover: Chose a category",
      para: "Dive into a world of possibilities by selecting your area of mentorship.",
    },
    {
      image: Find,
      title: "Meet Your Guide: Find The Right Mentor",
      para: "Connect with experienced mentors which you feel right for you.",
    },
    {
      image: Schedule,
      title: "Book Your Path: Schedule A Call",
      para: "Take the next step towards success by scheduling your first conversation.",
    },
  ];

  return (
    <div className="pt-24 md:px-8">
      <div className="px-5 md:px-0">
        <h1 className="py-5 text-3xl text-center font-kanit lg:pl-20 lg:text-5xl lg:text-start">
          How it{" "}
          <span className="text-transparent bg-gradient-to-l from-[#4a7999] via-[#5b99c3] to-[#4c8db8] bg-clip-text">
            Works?
          </span>
        </h1>
        <p className="max-w-md text-justify lg:max-w-xl lg:pl-20 lg:text-lg">
          Unlock your full potential with our easy 4-step process. We&apos;ve
          streamlined every aspect of your journey, ensuring a seamless
          experience from start to finish. Our platform is your gateway to
          personal growth and achievement, where you&apos;ll connect with
          experienced mentors who are passionate about helping you reach your
          goals.
        </p>
        <section className="grid items-center justify-center grid-cols-1 gap-8 mx-auto mt-14 md:grid-cols-2">
          {howItWorks?.map((item, i) => {
            return (
              <div key={i}>
                <div className="flex flex-col lg:flex-row rounded-lg items-start md:h-44  mx-auto border-[1px] hover:shadow-md ease-in-out duration-300 cursor-pointer border-slate-300 p-5 space-y-5 lg:space-y-0 lg:space-x-5">
                  <img src={item.image} className="w-16 h-16w-16" alt="" />
                  <div className="space-y-3">
                    <h1 className="text-2xl font-kanit">{item.title}</h1>
                    <p className="leading-7 font-kanit ">{item.para}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
        <div className="py-8 mt-16">
          <h1 className="text-3xl text-center lg:text-5xl font-kanit">
            Explore by
            <span className="text-transparent bg-gradient-to-l from-[#4a7999] via-[#5b99c3] to-[#4c8db8] bg-clip-text mx-1">
              Categories
            </span>
          </h1>
        </div>
      </div>
      <Card />
      <div className="px-5 pb-0 py-7 md:px-0">
        <div className="flex flex-row-reverse items-center justify-around">
          {data.map((item, index) => {
            return (
              <div key={index} className="py-4">
                <FAQs key={index} Q={item.Q}>
                  <p className="text-[#7c7c7c] max-w-2xl text-sm md:text-md">
                    {item.Ans}
                  </p>
                </FAQs>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowContent;
