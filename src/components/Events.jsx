const Events = ({ Scrolltoref }) => {
  return (
    <>
      <div className="mt-24 mb-6 bg-custom-banner">
        <div className="text-white md:p-10">
          <h1 className="my-6 text-sm lg:text-3xl">
            MentorHeal Guidance Program (MGP)
          </h1>
          <p className="text-sm font-semibold lg:text-lg my-7">
            Schools | Colleges | Institutions | Offices
          </p>
          <p className="text-sm font-semibold lg:text-lg my-11">
            Contact us to invite the professionals in various industries and
            spaces or conduct a seminar, event or a workshop
          </p>
          <button
            onClick={Scrolltoref}
            className="bg-[#4a7999] rounded-full text-white font-semibold px-10 py-1.5"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Events;
