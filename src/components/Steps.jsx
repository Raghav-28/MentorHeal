import { chose, Find, Schedule, Set } from "../assets";

const Steps = () => {
  const Step = [
    {
      image: Set,
      title: "Get Started: Set Up Your Account in just  few clicks",
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
      title: "Book Your Path: Schedule A Call and get started",
      para: "Take the next step towards success by scheduling your first conversation.",
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
        <div className="flex flex-col flex-wrap items-start justify-center gap-4 px-4 mt-16 lg:px-0 md:px-0 lg:gap-4 lg:flex-row">
          {Step.map((item, i) => {
            return (
              <div
                key={i}
                className="flex flex-col hover:shadow-md ease-in-out duration-300 lg:items-start mx-auto space-y-3 md:w-64 lg:w-72 border-[1px] rounded-lg border-slate-300 p-3.5 w-full"
              >
                <div className="mx-auto">
                  <img
                    src={item.image}
                    alt={item.image}
                    className="w-24 lg:w-32 aspect-square"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-lg text-[#000000] font-kanit ">
                    {item.title}
                  </p>
                  <p className="text-sm font-kanit text-[#8ca1b3] leading-6">
                    {item.para}
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
