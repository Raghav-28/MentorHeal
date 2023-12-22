import { useEffect, useState } from "react";
// import dayjs from "dayjs";
// import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Carddata from "./Data";
import { auth, db } from "../config/firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { Footer, Loader, NavBar } from "./";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import moment from "moment";

const BookForm = () => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");

  const [date, setDate] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: user?.email,
    phone: "",
    category: "Career",
  });

  const navigate = useNavigate();
  let today = new Date().toISOString();
  // today = today.substring(0, today.length - 8);
  console.log(today);
  console.log("mom", moment().format());

  const handleDateChange = (e) => {
    // console.log(e.target.value, typeof e.target.value);
    // let intDate = new Date(e.target.value).toISOString().toString();
    // let newDate = intDate.substring(0, intDate.length - 1);
    setDate(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(form).every((i) => i == "")) {
      alert("Please Fill the form");
    } else {
      const sessionDate = new Date(date);
      try {
        await addDoc(collection(db, "sessions"), {
          sessionDate: sessionDate,
          bookedOn: new Date(),
          userData: form,
        });
        let templateParams = {
          userName: name,
          userEmail: user?.email,
          sessionDate: date,
        };
        await emailjs
          .send(
            import.meta.env.VITE_mailServiceID,
            import.meta.env.VITE_mailTemplateID,
            templateParams,
            import.meta.env.VITE_mailPublicKey
          )
          .then(
            function (response) {
              console.log("Mail Sent: ", response.status, response.text);
            },
            function (error) {
              console.log("Sending Email Failed: ", error);
            }
          );
        alert("Thank you");
      } catch (error) {
        alert("Error, Try Again Later!");
      }
    }
  };

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
      setForm({
        ...form,
        name: data.name,
      });
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) navigate("/join");
    fetchUserName();
  }, [user, loading]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="pb-16">
            <NavBar />
          </div>
          <div className="py-7">
            <form
              className="max-w-md md:max-w-md mx-auto p-7 text-white shadow-sm bg-[#4a7999]"
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label className="block mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full px-4 py-2 text-black border rounded-md outline-none"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  required
                  autoFocus
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-4 py-2 text-black border rounded-md outline-none "
                  type="email"
                  name="email"
                  value={user?.email}
                  readOnly
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2" htmlFor="phoneNumber">
                  Phone Number
                </label>
                <input
                  className="w-full px-4 py-2 text-black border rounded-md outline-none "
                  type="number"
                  name="phone"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      phone: e.target.value,
                    })
                  }
                  maxLength={10}
                  minLength={10}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2" htmlFor="category">
                  Choose Category
                </label>
                <select
                  className="w-full px-4 py-2 text-black border rounded-md outline-none "
                  name="category"
                  value={form.category}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      category: e.target.value,
                    })
                  }
                  required
                >
                  {Carddata.map((item, index) => {
                    return <option key={index}>{item.Title}</option>;
                  })}
                </select>
              </div>

              <div className="mb-4">
                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DateTimePicker"]}>
                    <DemoItem label="Select date & time">
                      <DateTimePicker
                        disablePast={true}
                        name="date"
                        value={date}
                        onChange={handleDateChange}
                        defaultValue={dayjs(new Date())}
                        className="text-white border-white"
                      />
                    </DemoItem>
                  </DemoContainer>
                </LocalizationProvider> */}
                <label className="block mb-2" htmlFor="datetime">
                  Select date and time
                </label>
                <input
                  type="datetime-local"
                  name="date"
                  id="datetime"
                  value={date}
                  onChange={handleDateChange}
                  min={today}
                  // max={new Date().toISOString() + 2}
                  className="w-full px-4 py-2 text-black border rounded-md outline-none border-white"
                  required
                />
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
      )}
    </>
  );
};

export default BookForm;
