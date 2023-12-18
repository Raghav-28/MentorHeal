import { useState } from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Carddata from "./Data";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";
import { Footer, NavBar } from "./index";

const BookForm = () => {
  const [date, setdate] = useState(null);
  const [form, setForm] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Options: "",
  });
  const handleChange = (date) => {
    setdate(date);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(form).every((i) => i == "")) {
      alert("Please Fill the form");
    } else {
      const Bookingdate = date.$d;
      try {
        await addDoc(collection(db, "Sessions Booked"), { form, Bookingdate });
        alert("Thank you");
      } catch (error) {
        alert("Error, Try Again......!");
      }
    }
  };

  return (
    <>
      <div className="pb-16">
        <NavBar />
      </div>
      <div className=" py-7">
        <form
          className="max-w-md md:max-w-md mx-auto p-7  text-white shadow-sm  bg-[#4a7999]"
          onSubmit={handleSubmit}
        >
          <div className="mb-4 space-y-5 text-white">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateTimePicker"]}>
                <DemoItem label="Select date & time">
                  <DateTimePicker
                    disablePast={true}
                    name="date"
                    value={date}
                    onChange={handleChange}
                    defaultValue={dayjs("2023-06-17T15:30")}
                    className="text-white border-white"
                    
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>

            <label className="block mb-2 " htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-4 py-2 text-black border rounded-md outline-none"
              type="text"
              name="Name"
              value={form.Name}
              onChange={(e) =>
                setForm({
                  ...form,
                  Name: e.target.value,
                })
              }
              required
            />
          </div>

          <div className="mb-4 space-y-5">
            <label className="block mb-2 " htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 text-black border rounded-md outline-none "
              type="email"
              name="Email"
              value={form.Email}
              onChange={(e) =>
                setForm({
                  ...form,
                  Email: e.target.value,
                })
              }
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 " htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              className="w-full px-4 py-2 text-black border rounded-md outline-none "
              type="tel"
              name="Phone"
              value={form.Phone}
              onChange={(e) =>
                setForm({
                  ...form,
                  Phone: e.target.value,
                })
              }
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 " htmlFor="options">
              Choose Category
            </label>
            <select
              className="w-full px-4 py-2 text-black border rounded-md outline-none "
              name="Options"
              value={form.Options}
              onChange={(e) =>
                setForm({
                  ...form,
                  Options: e.target.value,
                })
              }
            >
              {Carddata.map((item, index) => {
                return <option key={index}>{item.Title}</option>;
              })}
            </select>
          </div>

          <div className="flex justify-center">
            <button
              className="px-14 py-2.5 text-sm tracking-wide text-black bg-white rounded-full font-Kanit mt-5"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default BookForm;
