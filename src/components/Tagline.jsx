const Tagline = () => {
  return (
    <section className="mt-28">
      <div className="flex flex-col space-y-8 text-center md:items-center md:justify-around">
        <div className="space-y-2 text-3xl md:text-4xl">
          <h1 className="font-kanit text-2x1 font-bold">The 9 essential elements of : </h1>
          <span className=" text-transparent bg-gradient-to-l from-[#4a7999] via-[#5b99c3] to-[#4c8db8] bg-clip-text mx-1 font-semibold">
            Life Mystery
          </span>
        </div>
        <div className="px-5 leading-6 md:max-w-5xl md:px-3 ">
          <p className=" md:text-lg text-black leading-7 font-kanit  font-bold">
          "Unlocking Life's Potential: Nurturing Personal, Professional, Physical, and Emotional Wellness for Holistic Growth."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tagline;
