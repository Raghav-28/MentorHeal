import React, { useId, useRef, useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { setDoc, doc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { db, storage } from "../../Firebase";
import { useNavigate } from "react-router-dom";
import { BiLoaderAlt } from "react-icons/bi";
import emailjs from "@emailjs/browser";
import Data from "../../Data/MentorShipCategories";
import { NavBar } from "../../components";
export default function JoinMentor() {
  const dpref = useRef(null);
  const id = useId();
  const navigate = useNavigate();
  const [loader, setloader] = useState();
  const [blobimg, setblogimg] = useState({ image: "" });
  const [uploadimage, setuploadimage] = useState();

  const [mentor, setmentor] = useState({
    Name: "",
    Phone: "",
    Email: "",
    Categeory: "health", 
    image: "",
    achievement: "",
  });

  const sendEmail = (email) => {
    emailjs
      .send(
        "service_m5ql7ex",
        "template_s697m1j",
        {
          from_name: "MentorHeal",
          to_name: mentor.Name,
          from_email: "chrahulofficial@gmail.com",
          to_email: email,
          message:
            "A warm welcome to our mentor team at MentorHeal! We're excited to have you on board. Your expertise will be invaluable in guiding our team. Let's embark on this journey together!",
        },
        "pskEHJBdJUVoAlloz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // Creating a mentor profile
  const uploadImage = async () => {
    if (!blobimg) {
      console.log("No image selected.");
      return;
    }
    if (
      mentor.Name !== "" &&
      mentor.Email !== "" &&
      mentor.Phone !== "" &&
      mentor.achievement !== "" &&
      mentor.Categeory !== ""
    ) {
      setloader(true);
      const storageRef = ref(storage, `${id}/${uploadimage.name}`);
      try {
        await uploadBytes(storageRef, uploadimage);
        const downloadURL = await getDownloadURL(storageRef);
        const updatedMentor = {
          ...mentor,
          image: downloadURL,
        };
        setmentor(updatedMentor);
        const mentorRef = doc(db, "MENTORS", mentor.Name);
        await setDoc(mentorRef, updatedMentor);
        setloader(false);
        localStorage.setItem("mentorjwt", id);
        navigate("/mentors");
        sendEmail(mentor.Email);
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("An error occurred while uploading the image.");
      }
    } else {
      alert("Enter all the details");
    }
  };

  return (
    <>
      <NavBar />
      <div className="z-50 flex items-center justify-center h-full p-3 pt-10 overflow-y-scroll">
        <div className="w-[86vw] md:w-[60vw] lg:w-[45vw] px-8 bg-[#4a7999] rounded-md py-3 overflow-y-scroll text-white">
          <div className="space-y-3 text-lg">
            <h1 className="font-semibold font-poppins">
              Register as a Mentor*
            </h1>
            <p className="font-light text-semibold">
              Contact information will only be used to coordinate sessions with
              you.
            </p>
          </div>
          <form className="flex flex-col gap-5 mt-5 md:gap-7 lg:gap-10">
            <div className="flex flex-col space-y-3">
              <label className="pl-1.5">Name*</label>
              <input
                type="text"
                placeholder="Name"
                value={mentor.Name}
                onChange={(e) => {
                  setmentor({ ...mentor, Name: e.target.value });
                }}
                className="p-3 outline-none border-b-[0.5px] border-gray-300  focus:border-gray-800 ease-in-out duration-300 text-black"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="pl-1.5">Phone*</label>
              <input
                type="text"
                value={mentor.Phone}
                placeholder="Phone"
                onChange={(e) => {
                  setmentor({ ...mentor, Phone: e.target.value });
                }}
                className="p-3 outline-none border-b-[0.5px] border-gray-300 focus:border-gray-800 ease-in-out duration-300 text-black"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="pl-1.5">Email*</label>
              <input
                type="text"
                value={mentor.Email}
                placeholder="Email"
                onChange={(e) => {
                  setmentor({ ...mentor, Email: e.target.value });
                }}
                className="p-3 outline-none border-b-[0.5px] border-gray-300  focus:border-gray-800  ease-in-out duration-300 text-black"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="pl-1.5">Category *</label>
              <select
                className="p-3 outline-none border-b-[0.5px] border-gray-300  focus:border-gray-800 ease-in-out duration-300 text-black"
                onChange={(e) => {
                  setmentor({ ...mentor, Categeory: e.target.value });
                }}
              >
                {Data.map((item, i) => {
                  return (
                    <React.Fragment key={i}>
                      <option value={item}>{item}</option>
                    </React.Fragment>
                  );
                })}
              </select>
            </div>
            <div className="flex flex-col space-y-3 md:col-span-2">
              <label className="pl-1.5">
                Bio*{" "}
                <span className="text-sm">
                  (This will be shown in your profile)
                </span>
              </label>
              <textarea
                type="text"
                value={mentor.achievement}
                placeholder="Bio"
                maxLength={250}
                onChange={(e) => {
                  setmentor({ ...mentor, achievement: e.target.value });
                }}
                className="p-3 outline-none border-b-[0.5px] border-gray-300  focus:border-gray-800 ease-in-out duration-300 text-black"
              />
            </div>
            <div className="flex flex-col space-y-3 md:col-span-2">
              <input
                ref={dpref}
                type="file"
                id="files"
                className="hidden"
                onChange={(e) => {
                  setblogimg({
                    ...blobimg,
                    image: URL.createObjectURL(e.target.files[0]),
                  });
                  setuploadimage(e.target.files[0]);
                }}
              />
              {blobimg.image ? (
                <img
                  src={blobimg.image}
                  className="mx-auto rounded-full w-28 h-28"
                  alt=""
                />
              ) : null}
              {blobimg.image ? null : (
                <div className="flex flex-col items-center gap-1 mx-auto ">
                  <FiUploadCloud
                    size={65}
                    className="cursor-pointer"
                    color="white"
                    onClick={() => {
                      dpref.current.click();
                    }}
                  />
                  <p className="font-light">Your Picture</p>
                </div>
              )}
            </div>
          </form>
          <div className="flex justify-center mb-5 mt-11">
            <button
              onClick={uploadImage}
              className="px-10 py-2 text-sm tracking-wide text-black bg-white rounded-full font-Kanit">
              {loader ? (
                <BiLoaderAlt
                  size={27}
                  color="black"
                  className="duration-300 ease-in-out animate-spin"
                />
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
