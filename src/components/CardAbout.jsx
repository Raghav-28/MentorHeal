import { lg1, lg2, lg3, lg4, lg5, lg6, lg7 } from "../assets";

const CardAbout = () => {
  const team = [
    {
      name: "Ayush Kulkarni",
      position: "Co-Founder",
      image: lg1,
    },
    {
      name: "Atul Akella",
      position: "Co-Founder and COO",
      image: lg2,
    },
    {
      name: "Abhinav Singh",
      position: "Co-Founder and CTO",
      image: lg3,
    },
    {
      name: "Brijesh Kulkarni",
      position: "Co-Founder and CPO",
      image: lg4,
    },
    {
      name: "Ansh Singh Sonkhia",
      position: "Co-Founder and Product Strategist",
      image: lg5,
    },
    {
      name: "Arihant Gupta",
      position: "Principal Consultant",
      image: lg6,
    },
    {
      name: "Sashreek Reddy",
      position: "Marketing Lead",
      image: lg7,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-14">
      <div className="pt-8">
        <h1 className="text-3xl lg:text-4xl text-[#4a7999]">OUR TEAM</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 p-4 mt-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {team.map((member, index) => {
          return (
            <div
              key={index}
              className="max-w-md duration-500 ease-in-out cursor-pointer border-[1px] border-slate-300 p-4 hover:shadow-md rounded-lg"
            >
              <img
                className="md:w-[20vw] hover:brightness-75  grayscale duration-700 ease-in-out"
                src={member.image}
                alt=""
              />
              <div className="space-y-2.5 mt-3 text-center">
                <div className="text-xl font-bold md:text-2xl text-[#4a7999]">
                  {member.name}
                </div>
                <p className="font-kanit text-[#8ca1b3]">{member.position}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardAbout;
