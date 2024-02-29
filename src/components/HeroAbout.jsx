const HeroAbout = () => {
  return (
    <div className="bg-gradient-to-r from-[#e8f4ef] to-[#faebe5] mt-0 flex flex-col-reverse md:flex-row items-center pt-14">
      <div className="flex flex-col items-center px-6 mx-auto">
        <h1 className="font-kanit text-xl md:text-4xl lg:text-5xl leading-10 md:leading-[50px] lg:leading-[65px] lg:w-[573px] text-center py-4 md:pt-16 p-20">
          We heal the
          <span className="font-kanit text-transparent bg-gradient-to-l from-[#4a7999] via-[#5b99c3] to-[#4c8db8] bg-clip-text mx-1">
            modern
          </span>
          world with mentorship
        </h1>
      </div>
    </div>
  );
};

export default HeroAbout;
