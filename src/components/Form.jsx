import { useState } from "react";
import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { contactImage } from "../assets";

const Form = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });

  const submitUser = async (e) => {
    e.preventDefault();
    if (user.name && user.email && user.message != "") {
      try {
        await addDoc(collection(db, "queries"), {
          name: user.name,
          email: user.email,
          message: user.message,
          submission: new Date(),
          source: window.location.href,
        });
        setUser({ name: "", email: "", message: "" });
        alert("success");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Fill the data");
    }
  };
  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto text-gray-900 bg-white mt-14 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-4xl leading-tight text-transparent font-kanit bg-gradient-to-l from-[#4a7999] via-[#5b99c3] to-[#4c8db8] bg-clip-text lg:text-5xl">
            Reach out to Us!
          </h2>
          <div className="space-y-4 my-8 text-[#8ca1b3] ">
            <p className=" font-kanit">
              If you have any concern please feel free to contact us by filling
              up the form.
            </p>
            <a href="mailto:contact@mentorheal.com" className="font-kanit">
              contact@mentorheal.com
            </a>
          </div>
        </div>
        <div className="mt-8 text-center w-full">
          <img src={contactImage} alt="Contact Image" />
        </div>
      </div>
      <form onSubmit={submitUser}>
        <div>
          <span className="uppercase text-sm text-[#8ca1b3] font-bold">
            Full Name
          </span>
          <input
            className="w-full p-3 mt-2 rounded-lg bg-slate-50 focus:outline-none border-2 border-gray-200 focus:border-gray-300"
            name="name"
            type="text"
            placeholder="John Smith"
            value={user.name}
            required
            onChange={(e) => {
              setUser({
                ...user,
                name: e.target.value,
              });
            }}
          />
        </div>
        <div className="mt-8">
          <span className="uppercase text-sm text-[#8ca1b3] font-bold">
            Email
          </span>
          <input
            className="w-full p-3 mt-2 rounded-lg bg-gray-50 focus:outline-none border-2 border-gray-200 focus:border-gray-300"
            name="email"
            type="email"
            placeholder="contact@johnsmith.com"
            value={user.email}
            required
            onChange={(e) => {
              setUser({
                ...user,
                email: e.target.value,
              });
            }}
          />
        </div>
        <div className="mt-8">
          <span className="uppercase text-sm text-[#8ca1b3] font-bold">
            Message
          </span>
          <textarea
            name="message"
            placeholder="Your message"
            value={user.message}
            required
            onChange={(e) => {
              setUser({
                ...user,
                message: e.target.value,
              });
            }}
            className="resize-none w-full h-32 p-3 mt-2 rounded-lg bg-gray-50 focus:outline-none border-2 border-gray-200 focus:border-gray-300"
          >
            {" "}
          </textarea>
        </div>
        <div className="mt-8">
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide text-gray-100 uppercase rounded-lg bg-[#4a7999] "
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
