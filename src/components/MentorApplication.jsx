import { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Footer, NavBar } from "./";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

const MentorApplication = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [form, setForm] = useState({
    email: "",
    name: "",
    gender: "male",
    age: "",
    contact: "",
    city: "",
    state: "",
    description: "",
    category: [],
    experience: "",
    references: "",
    approach: "",
    availability: [],
  });

  const handleMentorApplicationSubmission = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "mentor-application"), form);
    setForm({
      email: "",
      name: "",
      gender: "male",
      age: "",
      contact: "",
      city: "",
      state: "",
      description: "",
      category: [],
      experience: "",
      references: "",
      approach: "",
      availability: [],
    });
  };

  const handleCheckboxChange = (label) => {
    const index = selectedOptions.indexOf(label);

    if (index === -1) {
      // If the label is not in the array, add it
      setSelectedOptions([...selectedOptions, label]);
    } else {
      // If the label is already in the array, remove it
      setSelectedOptions(selectedOptions.filter((option) => option !== label));
    }

    // Check if more than 3 options are selected
    if (selectedOptions.length > 2) {
      toast.error("You can only choose up to 3 options!", {
        position: "top-center",
        autoClose: 3000, // 3 seconds
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      setForm({ ...form, category: selectedOptions });
    }
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="  flex justify-start items-center bg-blue-100">
        <div className="flex  justify-center flex-wrap   w-fit bg-white mx-auto  mt-28 mb-10">
          <div className="leftone  text-center  flex flex-col  bg-white h-1/2 sm:w-[500px]">
            <div className=" bg-white text-xl  font-bold text-gray-700 p-4  m-5 ">
              <span className="text-3xl text-[#4a7999]">Aim</span>
              <br></br>MentorHeal offers holistic wellness mentorship,
              connecting individuals with certified mentors in various life
              aspects—career, mental health, relationships, fitness, finance,
              spirituality, and life coaching. We prioritize expertise,
              credibility, confidentiality, and trust
            </div>
            <div className=" bg-white  text-xl  font-bold text-gray-700 p-4  m-5">
              <span className="text-3xl text-[#4a7999]">Mission</span>
              <br></br>Empower individuals for a balanced, fulfilling life.
              MentorHeal provides tools, knowledge, and mentorship across
              physical, mental, emotional, and spiritual dimensions.
            </div>
            <div className=" bg-white  text-xl font-bold text-gray-700 p-4  m-5">
              <span className="text-3xl text-[#4a7999]">Vision</span>
              <br></br>MentorHeal aims to pioneer holistic wellness, envisioning
              a world where individuals achieve complete well-being. We connect
              people with certified mentors, fostering meaningful connections
              for growth and fulfillment.
            </div>
          </div>
          <div className="rightone border-0  lg:border-l-2 bg-white   flex  flex-col sm:w-[500px] ">
            <div className="flex justify-start ml-6">
              <div className="font-bold text-2xl mt-5">Mentor Details</div>
            </div>
            <div className="rightChild  flex flex-col justify-center  m-10 ">
              <form
                onSubmit={handleMentorApplicationSubmission}
                className="h-full lg:h-[100dvh] overflow-auto"
              >
                <section className="">
                  <div className="emailone w-full mb-8">
                    <div className="font-bold text-gray-600  m-2 ">Email</div>
                    <input
                      type="email"
                      className="p-3 rounded-full w-full border-solid border border-gray-200 shadow-md "
                      placeholder="Email Address"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="nameone w-full mb-8">
                    <div className="font-bold text-gray-600   m-2 ">Name</div>
                    <input
                      type="text"
                      className=" p-3 rounded-full w-full border-solid border border-gray-200 shadow-md "
                      placeholder="Full Name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="nameone w-full mb-8">
                    <div className="font-bold text-gray-600   m-2 ">Gender</div>
                    <select
                      id="gender"
                      name="gender"
                      className="p-3  rounded-full w-full border-solid border border-gray-200 shadow-md "
                      defaultValue={form.gender}
                      onChange={(e) =>
                        setForm({ ...form, gender: e.target.value })
                      }
                      required
                    >
                      <option value="male" selected>
                        Male
                      </option>
                      <option value="female">Female</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                  <div className="Age w-full mb-8">
                    <div className="font-bold text-gray-600  m-2 ">Age</div>
                    <input
                      type="text"
                      className="login__textBox p-3 rounded-full w-full border-solid border border-gray-200 shadow-md "
                      placeholder="Age"
                      value={form.age}
                      onChange={(e) =>
                        setForm({ ...form, age: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="contact w-full mb-8">
                    <div className="font-bold text-gray-600  m-2 ">Contact</div>
                    <input
                      type="text"
                      className="login__textBox p-3 rounded-full w-full border-solid border border-gray-200 shadow-md "
                      placeholder="Enter phone number"
                      value={form.contact}
                      onChange={(e) =>
                        setForm({ ...form, contact: e.target.value })
                      }
                      required
                    />
                  </div>
                </section>

                <section>
                  <div className="city w-full mb-8">
                    <div className="font-bold text-gray-600  m-2 ">City</div>
                    <input
                      type="text"
                      className="login__textBox p-3 rounded-full w-full border-solid border border-gray-200 shadow-md "
                      placeholder="Enter city"
                      value={form.city}
                      onChange={(e) =>
                        setForm({ ...form, city: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="state w-full mb-8">
                    <div className="font-bold text-gray-600  m-2 ">State</div>
                    <input
                      type="text"
                      className="p-3 rounded-full w-full border-solid border border-gray-200 shadow-md "
                      placeholder="Enter state"
                      value={form.state}
                      onChange={(e) =>
                        setForm({ ...form, state: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="state w-full mb-8">
                    <div className="font-bold text-gray-600">
                      A brief description about yourself (This will be uploaded
                      on the website for the mentees to know about you).
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="mt-2 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500 shadow-md "
                      value={form.description}
                      onChange={(e) =>
                        setForm({ ...form, description: e.target.value })
                      }
                      required
                    ></textarea>
                  </div>
                </section>

                <section>
                  <div className="mr-10 mb-8">
                    <div className="font-bold text-gray-600">
                      Category of Mentorship
                    </div>
                    <FormGroup className="" required>
                      <FormControlLabel
                        control={<Checkbox sx={{ padding: "2px" }} />}
                        onChange={() => handleCheckboxChange("Health")}
                        label="Health"
                        sx={{ margin: "2px" }}
                      />
                      <FormControlLabel
                        control={<Checkbox sx={{ padding: "2px" }} />}
                        onChange={() => handleCheckboxChange("Career")}
                        label="Career"
                        sx={{ margin: "2px" }}
                      />
                      <FormControlLabel
                        control={<Checkbox sx={{ padding: "2px" }} />}
                        onChange={() => handleCheckboxChange("Learning")}
                        label="Learning"
                        sx={{ margin: "2px" }}
                      />
                      <FormControlLabel
                        control={<Checkbox sx={{ padding: "2px" }} />}
                        onChange={() => handleCheckboxChange("Skills")}
                        label="Skills"
                        sx={{ margin: "2px" }}
                      />
                      <FormControlLabel
                        control={<Checkbox sx={{ padding: "2px" }} />}
                        onChange={() => handleCheckboxChange("Decision")}
                        label="Decision"
                        sx={{ margin: "2px" }}
                      />
                      <FormControlLabel
                        control={<Checkbox sx={{ padding: "2px" }} />}
                        onChange={() => handleCheckboxChange("Relationship")}
                        label="Relationship"
                        sx={{ margin: "2px" }}
                      />
                      <FormControlLabel
                        control={<Checkbox sx={{ padding: "2px" }} />}
                        onChange={() =>
                          handleCheckboxChange("Entrepreneurship")
                        }
                        label="Entrepreneurship"
                        sx={{ margin: "2px" }}
                      />
                      <FormControlLabel
                        control={<Checkbox sx={{ padding: "2px" }} />}
                        onChange={() =>
                          handleCheckboxChange("Financial Literacy")
                        }
                        label="Financial Literacy"
                        sx={{ margin: "2px" }}
                      />
                      <FormControlLabel
                        control={<Checkbox sx={{ padding: "2px" }} />}
                        onChange={() => handleCheckboxChange("Spirituality")}
                        label="Spirituality"
                        sx={{ margin: "2px" }}
                      />
                      <div>
                        <FormControlLabel
                          control={<Checkbox sx={{ padding: "2px" }} />}
                          label="Other:"
                          sx={{ margin: "2px" }}
                        />
                        <input
                          type="text"
                          disabled={selectedOptions.length > 3}
                          className="border-b border-gray-500 ml-3 focus:outline-none focus:border-black"
                        ></input>
                      </div>
                    </FormGroup>
                    <ToastContainer />
                  </div>

                  <div className="state w-full mb-8">
                    <div className="font-bold text-gray-600  m-2 ">
                      Experience in mentoring individuals in specific aspect (In
                      years)
                    </div>
                    <input
                      type="text"
                      className="login__textBox p-3 rounded-full w-full border-solid border border-gray-200 shadow-md "
                      placeholder="Your Answer"
                      value={form.experience}
                      onChange={(e) =>
                        setForm({ ...form, experience: e.target.value })
                      }
                      required
                    />
                  </div>
                </section>

                <section>
                  <div className="state w-full mb-8">
                    <div className="font-bold text-gray-600 mb-1">
                      References or Testimonials Can you share references or
                      testimonials from individuals you have previously
                      mentored?
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="mt-2 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500 shadow-md "
                      value={form.references}
                      onChange={(e) =>
                        setForm({ ...form, references: e.target.value })
                      }
                      required
                    ></textarea>
                  </div>

                  <div className="state w-full mb-6">
                    <div className="font-bold text-gray-600 mb-1">
                      Approach to Goal-Setting and Progress Tracking<br></br>
                      Briefly describe how you approach setting goals and
                      tracking progress during mentorship sessions.
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="mt-2 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500 shadow-md "
                      value={form.approach}
                      onChange={(e) =>
                        setForm({ ...form, approach: e.target.value })
                      }
                      required
                    ></textarea>
                  </div>
                </section>

                <section>
                  <div className="mr-10 mb-4 ">
                    <div className="font-bold text-gray-600 ">
                      Availability for Mentorship Sessions<br></br>
                      Indicate your availability for mentorship sessions,
                      specifying preferred days and times.
                    </div>
                    <FormGroup className="" required>
                      <FormControlLabel
                        control={<Checkbox sx={{ padding: "2px" }} />}
                        label="7am-8am"
                        sx={{ margin: "2px" }}
                      />
                      <FormControlLabel
                        control={<Checkbox sx={{ padding: "2px" }} />}
                        label="8am-9am"
                        sx={{ margin: "2px" }}
                      />
                      <FormControlLabel
                        control={<Checkbox sx={{ padding: "2px" }} />}
                        label="9am-10am"
                        sx={{ margin: "2px" }}
                      />
                      <FormControlLabel
                        control={<Checkbox sx={{ padding: "2px" }} />}
                        label="10am-11am"
                        sx={{ margin: "2px" }}
                      />
                      <FormControlLabel
                        control={<Checkbox sx={{ padding: "2px" }} />}
                        label="11am-12pm"
                        sx={{ margin: "2px" }}
                      />
                      <FormControlLabel
                        control={<Checkbox sx={{ padding: "2px" }} />}
                        label="12pm-1pm"
                        sx={{ margin: "2px" }}
                      />
                      <FormControlLabel
                        control={<Checkbox sx={{ padding: "2px" }} />}
                        label="1pm-2pm"
                        sx={{ margin: "2px" }}
                      />
                      <FormControlLabel
                        control={<Checkbox sx={{ padding: "2px" }} />}
                        label="2pm-3pm"
                        sx={{ margin: "2px" }}
                      />
                      <FormControlLabel
                        control={<Checkbox sx={{ padding: "2px" }} />}
                        label="3pm-4pm"
                        sx={{ margin: "2px" }}
                      />
                      <FormControlLabel
                        control={<Checkbox sx={{ padding: "2px" }} />}
                        label="5pm-6pm"
                        sx={{ margin: "2px" }}
                      />
                      <FormControlLabel
                        control={<Checkbox sx={{ padding: "2px" }} />}
                        label="7pm-8pm"
                        sx={{ margin: "2px" }}
                      />
                      <FormControlLabel
                        control={<Checkbox sx={{ padding: "2px" }} />}
                        label="9pm-10pm"
                        sx={{ margin: "2px" }}
                      />
                    </FormGroup>
                  </div>
                </section>
                <button
                  type="submit"
                  className="text-white bg-[#4a7999] hover:bg-[#3c6e8f]  font-medium text-sm px-5 py-2.5 me-2   w-1/2 rounded-full mt-5 mb-5 shadow-md shadow-gray-400"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MentorApplication;
