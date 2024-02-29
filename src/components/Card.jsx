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
            <div className="flex justify-center max-w-lg duration-300 ease-in-out rounded-lg cursor-pointer hover:shadow-md shadow-slate-50">
              <div className="shadow-sm border-[0.3px] border-gray-200 rounded-lg flex flex-col items-center space-y-5 p-4">
                <img
                  src={item.image}
                  className="mt-4 bg-[#d1cfcf] rounded-full w-28 h-28"
                />
                <h1 className="text-3xl text-center font-kanit">
                  {item.Title}
                </h1>
                <p className="text-center lg:h-20 text-[#8ca1b3] font-kanit leading-6">
                  {item.para}
                </p>
                <p className="cursor-pointer text-[#00b8d3] font-kanit border-cyan-500">
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
    <div className="px-4 bg-[#4a7999] w-[100vw] mx-auto">
      <section className="my-28">
        <div className="items-center px-3 py-5 md:flex md:flex-row-reverse md:justify-around md:space-x-5 md:px-5">
          <div className="flex flex-col order-2 py-5 space-y-8 md:text-left">
            <h1 className="text-2xl text-white md:text-4xl md:max-w-[50vw] leading-8 font-kanit ">
              How will Mentorship help you?
            </h1>
            <p className="text-sm text-white md:max-w-[50vw] md:text-lg leading-6 md:leading-7 font-kanit">
              Through the guidance and support of a mentor, individuals can gain
              valuable insights, develop new skills, and overcome obstacles that
              they may have otherwise struggled with on their own. Whether in
              business, personal life, or any other aspect of life.A mentor
              serves as a compass, providing insights born from experience,
              steering individuals through challenges, and imparting crucial
              life skills. The mentor-mentee relationship fosters personal and
              professional growth, nurturing not just skills but character.
              Through shared experiences, a mentor instills resilience,
              strategic thinking, and a profound understanding of one{`'`}s
              strengths. This dynamic connection bridges the gap between theory
              and application, accelerating the journey toward success by
              offering a roadmap enriched with lessons learned firsthand.
            </p>
          </div>
          <div className="my-5 md:my-0">
            <img
              className="md:max-w-[20vw] mx-auto rounded-lg"
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
