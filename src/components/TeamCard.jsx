import Aos from "aos";
import { useEffect } from "react";

const TeamCard = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Yuvraj Singh",
      position: "Career",
      bio: "Dr. Yuvraj Singh is a highly accomplished and revered career mentor who has dedicated his life to empowering individuals to achieve their professional goals and unlock their fullest potential. With over two decades of experience in the corporate world and as an academician, he possesses a deep understanding of the challenges and opportunities that arise throughout one's career journey.",
      imageUrl: "",
    },
    {
      id: 2,
      name: "Deepika shetty",
      position: "Spirituality",
      bio: "Deepika Shetty is a renowned spiritual mentor, guide, and advocate for personal transformation and inner growth. With a profound understanding of spirituality and a genuine passion for helping others, she has touched the lives of countless individuals, leading them towards a deeper sense of self-awareness, peace, and purpose.",
      imageUrl: "",
    },
    {
      id: 3,
      name: "Rahul Menon",
      position: "Relationships",
      bio: "Rahul Menon is a highly respected and sought-after relationship mentor who has dedicated his life to helping individuals build healthy, fulfilling, and harmonious connections in their personal lives. With a deep understanding of human behavior and emotions, Rahul provides invaluable guidance to those seeking to navigate the complexities of relationships with compassion and wisdom.",
      imageUrl: "",
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="mx-5 my-10">
      <h1 className="px-5 text-3xl leading-10 text-center block font-kanit md:text-4xl">
        Meet your
        <span className="font-kanit text-transparent bg-gradient-to-l from-[#4a7999] via-[#5b99c3] to-[#4c8db8] bg-clip-text mx-1">
          premier advisors
        </span>
        , the
        <span className="font-kanit text-transparent bg-gradient-to-l from-[#4a7999] via-[#5b99c3] to-[#4c8db8] bg-clip-text mx-1">
          leading experts
        </span>
      </h1>
      <div className="grid grid-cols-1 gap-4 p-3 px-0 my-16 md:p-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {teamMembers.map((member, index) => {
          return (
            <div
              key={index}
              className="max-w-md rounded-md mx-auto cursor-pointer px-4 border-[1px] border-gray-200 hover:shadow-md ease-in-out duration-300"
            >
              <div className="space-y-2.5 my-3 text-center">
                <div className="text-xl text-transparent font-kanit md:text-2xl bg-gradient-to-l from-[#4a7999] via-[#5b99c3] to-[#4c8db8] bg-clip-text">
                  {member.name}
                </div>
                <p className="font-kanit text-[#4a7999]">{member.position}</p>
              </div>
              <div className="my-3">
                <p className="text-[#8ca1b3] leading-8">{member.bio}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamCard;
