import { Link } from "react-router-dom";
import { Carddata } from "./";
import { howMentorshipHelps } from "../assets";

const Card = () => {
  return (
    <div className="grid grid-cols-1 gap-5 px-5 mt-10 md:p-8 md:grid-cols-2 lg:grid-cols-3 place-items-center">
      {Carddata.map((item, index) => {
        return (
          <Link
            key={index}
            to={`/${item.Title}`}
            state={{
              title: item.Title,
              Background: item.Background,
              Blog: item.Blog,
            }}
          >
            <div className="flex justify-center max-w-lg  ease-in-out rounded-lg cursor-pointer hover:shadow-md shadow-slate-50 scroll-smooth transition-transform duration-300 transform hover:scale-105">
              <div className=" border-[0.3px] border-gray-200 rounded-lg flex flex-col items-center space-y-5 p-4 bg-cyan-500 hover:bg-cyan-700 shadow-lg hover:shadow-xl shadow-cyan-500 hover:shadow-cyan-700">
                <img
                  src={item.image}
                  className="mt-4 bg-[#4a7999] rounded-full  w-36 h-36 border-4 border-black dark:border-white"
                />
                <h1 className="text-4xl text-center font-kanit  ">
                  {item.Title}
                </h1>
                <p className="text-left lg:h-20 text-black font-kanit leading-6">
                  {item.para}
                </p>
                <p className="cursor-pointer text-xl text-white  font-kanit border-cyan-500 hover:bg-black hover:text-white rounded-sm">
                  Read More
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

const FirstCard = () => {
  return (
    <div className="px-4 bg-[#4c8db8] w-[100vw] mx-auto">
      <section className="my-28">
        <div className="items-center px-3 py-5 md:flex md:flex-row-reverse md:justify-around md:space-x-5 md:px-5">
          <div className="flex flex-col order-2 py-5 space-y-8 md:text-left">
            <h1 className="text-2xl text-black md:text-4xl md:max-w-[50vw] leading-8  font-bold ">
              How will Mentorship help you?
            </h1>
            <div className="text-sm text-white md:max-w-[70vw] md:text-lg leading-6 md:leading-7 font-kanit">
              <h5 className = "text-black text-x3 underline font-bold "> 1. Guidance :</h5> 
              <p className = "text-base">Mentors offer personalized advice and direction
              tailored to the mentee's needs and goals.</p>
              <h5  className = "text-black text-x3 underline font-bold ">2. Skill Development :</h5> 
              <p>Mentors provide opportunities for
              mentees to develop new skills and refine existing ones through
              practical experience and feedback.</p>
              <h5  className = "text-black text-x3 underline font-bold ">3. Overcoming Obstacles :</h5> 
              <p>Mentors help mentees navigate
              challenges by sharing their own experiences and strategies for
              overcoming similar obstacles.</p>
              <h5  className = "text-black text-x3 underline font-bold ">4. Personal Growth :</h5> 
              <p>Mentorship fosters not only professional
              development but also personal growth by nurturing qualities like
              resilience, adaptability, and self-awareness.</p>
            </div>
          </div>
          <div className="my-5 md:my-0">
            <img
              className="md:max-w-[40vw] mx-auto rounded-lg"
              alt="hero"
              src={howMentorshipHelps}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export { Card, FirstCard };
