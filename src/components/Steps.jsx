import { chose, Find, Schedule, Set } from "../assets";

const Steps = () => {
  const Step = [
    {
      image: Set,
      Tittle: "Get Started: Set Up Your Account in just  few clicks",
      Para: "Unlock the door to your journey with just a few clicks.",
    },
    {
      image: chose,
      Tittle: "Explore and Discover: Chose a category",
      Para: "Dive into a world of possibilities by selecting your area of mentorship.",
    },
    {
      image: Find,
      Tittle: "Meet Your Guide: Find The Right Mentor",
      Para: "Connect with experienced mentors which you feel right for you.",
    },
    {
      image: Schedule,
      Tittle: "Book Your Path: Schedule A Call and get started",
      Para: "Take the next step towards success by scheduling your first conversation.",
    },
  ];

  return (
    <section className="mt-20">
      <div className="px-5 md:px-0">
        <h1 className="text-3xl text-center md:text-4xl font-kanit">
          Four Steps to{" "}
          <span className="font-kanit text-transparent bg-gradient-to-l from-[#4a7999] via-[#5b99c3] to-[#4c8db8] bg-clip-text">
            unleash
          </span>{" "}
          a better you
        </h1>
        <div className="flex flex-col items-start justify-center gap-5 px-3 mt-16 lg:px-0 md:px-0 lg:gap-0 lg:flex-row">
          {Step.map((item, i) => {
            return (
              <div
                key={i}
                className="flex flex-col hover:shadow-md cursor-pointer ease-in-out duration-300 lg:items-start mx-auto space-y-3 lg:max-w-xs border-[1px] rounded-lg border-slate-300 p-3.5 w-[87vw] md:max-w-sm "
              >
                <div>
                  <img
                    src={item.image}
                    alt={item.image}
                    className="w-24 lg:w-32"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-lg text-[#000000] font-kanit ">
                    {item.Tittle}
                  </p>
                  <p className="text-sm font-kanit  w-72 text-[#8ca1b3] leading-6">
                    {item.Para}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Steps;
