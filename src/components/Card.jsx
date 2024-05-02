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
            <div className="flex justify-center w-96 h-80  ease-in-out rounded-lg cursor-pointer hover:shadow-md shadow-slate-50 scroll-smooth transition-transform duration-300 transform hover:scale-105 ">
              <div
                className="container relative   border-[2px] border-black rounded-lg flex flex-col items-center space-y-5 p-4 bg-cyan-500 hover:bg-cyan-600 shadow-lg hover:shadow-xl  hover:shadow-gray-300 bg-cover bg-center  "
                style={{
                  backgroundImage: `url(${item.image})  `,
                }}
              >
                {/* <img
                  src={item.image}
                  className="mt-4 bg-[#4a7999] rounded-full  w-36 h-36 border-4 border-black dark:border-white"
                /> */}

                <div className="content absolute inset-0 rounded-lg flex flex-col items-center justify-center bg-white bg-opacity-50 text-white opacity-0 transition-opacity duration-300 ">
                  <h1 className="text-4xl text-center my-12 font-kanit  bg-black border-cyan-500 rounded-md">
                    {item.Title}
                  </h1>
                  <p className="text-left lg:h-20 text-black font-kanit leading-6 font-semibold">
                    {item.para}
                  </p>
                  <p className="cursor-pointer text-xl text-black  font-kanit border-cyan-500 bg-white hover:bg-black hover:text-white rounded-sm">
                    Read More
                  </p>
                </div>
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
      <section className="my-28 animate-slidein700">
        <div className="items-center px-3 py-5 md:flex md:flex-row-reverse md:justify-around md:space-x-5 md:px-5 ">
          <div className="flex flex-col order-2 py-5 space-y-8 md:text-left overflow-hidden">
            <h1 className="animate-typewriter text-2xl text-black md:text-4xl md:max-w-[50vw] leading-8  font-bold ">
              How will Mentorship help you?
            </h1>
            <div className=" text-white md:max-w-[70vw] md:text-lg leading-6 md:leading-7 font-kanit ">
              <p className="text-base text-pretty ">
                Mentorship is invaluable for individuals seeking personal and
                professional growth. It offers guidance, wisdom, and support
                from experienced mentors, helping mentees expand their
                knowledge, refine their skills, and navigate challenges. Through
                mentorship, mentees gain valuable insights, receive constructive
                feedback, and build meaningful relationships that foster
                development and resilience. Mentors provide encouragement, share
                their experiences, and offer advice, empowering mentees to
                overcome obstacles and achieve their goals. Ultimately,
                mentorship cultivates a culture of learning, collaboration, and
                mentorship, benefiting both mentors and mentees as they embark
                on their respective journeys of growth and success.
              </p>
              {/* <h5 className="text-black text-x3 underline font-bold inline">
                
                Guidance :
              </h5>
              <p className="text-base text-pretty ">
                Mentors offer personalized advice and direction tailored to the
                mentee's needs and goals.
              </p>
              <h5 className="text-black text-x3 underline font-bold  ">
                Skill Development :
              </h5>
              <p className="text-base text-pretty ">
                Mentors provide opportunities for mentees to develop new skills
                and refine existing ones through practical experience and
                feedback.
              </p>
              <h5 className="text-black text-x3 underline font-bold ">
                {" "}
                Overcoming Obstacles :
              </h5>
              <p className="text-base text-pretty ">
                Mentors help mentees navigate challenges by sharing their own
                experiences and strategies for overcoming similar obstacles.
              </p>
              <h5 className="text-black text-x3 underline font-bold  ">
                Personal Growth :
              </h5>
              <p className="text-base text-pretty  ">
                Mentorship fosters not only professional development but also
                personal growth by nurturing qualities like resilience,
                adaptability, and self-awareness.
              </p> */}
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
