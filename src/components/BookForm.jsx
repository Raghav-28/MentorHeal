import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import dayjs from "dayjs";
// import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { auth, db } from "../config/firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { Carddata, Footer, Loader, NavBar } from "./";
import { useAuthState } from "react-firebase-hooks/auth";
import emailjs from "@emailjs/browser";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
// import moment from "moment";

const BookForm = () => {
  const [user, loadingAuth, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [loadingName, setLoadingName] = useState(true);

  const [date, setDate] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    category: "Career",
  });

  const navigate = useNavigate();
  let nDate = new Date();

  nDate.setDate(nDate.getDate(nDate) + 2);

  // console.log(`one day plus ${nDate}`);

  const Dateindex = nDate.toISOString().length - 8;
  let today = nDate.toISOString().slice(0, Dateindex);
  // new Date().toISOString().split("T")[0];
  // today = today.substring(0, today.length - 8);
  // console.log(`todays date`, today, typeof today);
  // console.log("mom", moment().format());

  const handleDateChange = (e) => {
    // console.log(e.target.value, typeof e.target.value);
    // let intDate = new Date(e.target.value).toISOString().toString();
    // let newDate = intDate.substring(0, intDate.length - 1);
    setDate(e.target.value);
    var c = new Date();
    const a = new Date(e.target.value);
    // console.log(`This is the date selected `, a, a.getTime(), c, c.getTime());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(form).every((i) => i == "")) {
      alert("Please Fill the form");
    } else {
      const sessionDate = new Date(date);
      // console.log(form);
      try {
        await addDoc(collection(db, "sessions"), {
          sessionDate: sessionDate,
          bookedOn: new Date(),
          userData: {
            name: form.name,
            email: user?.email,
            phone: form.phone,
            category: form.category,
            uid: user?.uid,
          },
        });
        let templateParams = {
          userName: name,
          userEmail: user?.email,
          sessionDate: sessionDate.toString(),
        };
        await emailjs
          .send(
            import.meta.env.VITE_mailServiceID,
            import.meta.env.VITE_mailTemplateID,
            templateParams,
            {
              publicKey: import.meta.env.VITE_mailPublicKey,
            }
          )
          .then(
            function (response) {
              // console.log("Mail Sent: ", response.status, response.text);
            },
            function (error) {
              // console.log("Sending Email Failed: ", error);
            }
          );
        alert("Thank you");
      } catch (error) {
        alert("Error, Try Again Later!");
        // console.log(error);
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
    setLoadingName(false);
  };

  useEffect(() => {
    if (loadingAuth) return;
    if (!user) navigate("/join");
    fetchUserName();
  }, [user, loadingAuth]);

  return (
    <>
      {loadingAuth || loadingName ? (
        <Loader />
      ) : (
        <>
          <div className="pb-20">
            <NavBar />
          </div>
          <div className="">
            <form
              className="flex justify-center  gap-2 flex-wrap items-start"
              onSubmit={handleSubmit}
            >
              <div className="2xl:basis-4/12 basis-96 sm:basis-7/12 md:basis-9/12 lg:basis-5/12 py-8 p-4 text-black ">
                <h1 className="text-3xl font-bold">Confirm booking</h1>
                <h2 className="text-xl font-medium mb-4 mt-8">
                  Contact Information
                </h2>
                <div className="mb-4">
                  <label className="text-sm block mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    disabled
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

                <div className="mb-4 basis-0">
                  <label className="text-sm block mb-2" htmlFor="email">
                    Email address
                  </label>
                  <input
                    disabled
                    className="w-full px-4 py-2 text-black border rounded-md outline-none "
                    type="email"
                    name="email"
                    value={user?.email}
                    readOnly
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="text-sm block mb-2" htmlFor="phoneNumber">
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
                  <label className="text-sm block mb-2" htmlFor="category">
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
                      return (
                        <option className="" key={index}>
                          {item.Title}
                        </option>
                      );
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
                    step="600"
                    onChange={handleDateChange}
                    min={today}
                    // format="hh:mm"
                    // max={maxDate}
                    className="w-full px-4 py-2 text-black border rounded-md outline-none border-[#e5e7eb]"
                    required
                  />
                </div>
              </div>
              <div
                className="bg-white text-gray-700 shadow-md py-8 mx-4 p-4 flex flex-col flex-wrap gap-4 
              border border-gray-300 rounded-lg basis-96 lg:mt-36"
              >
                <h2 className="text-xl font-medium">Session Details</h2>
                <div className="flex flex-row justify-between">
                  <h1>Session charge</h1>
                  <h1>Rs 400</h1>
                </div>{" "}
                <div className="flex flex-row justify-between">
                  <h1>Tax (18%)</h1>
                  <h1>Rs 72</h1>
                </div>
                <div className="relative flex items-center">
                  <div className="flex-grow border-t border-gray-700"></div>
                </div>
                <div className="flex pb-4 flex-row justify-between">
                  <h1>Total</h1>
                  <h1>Rs 472</h1>
                </div>
                <button
                  className="w-full font-semibold text-sm px-2 py-2 bg-[#4a7999] text-white duration-300 ease-in-out rounded-full border-2 flex justify-center gap-1"
                  // "px-14 py-2.5 text-sm tracking-wide text-black bg-white rounded-full font-kanit mt-5 border-[#4a7999] border-4"
                  type="submit"
                >
                  Proceed{" "}
                  <ArrowForwardOutlinedIcon
                    sx={{ paddingTop: "0" }}
                    fontSize="small"
                  />
                </button>
                <div className="text-center font-thin text-gray-600 text-sm">
                  <h1>P.S.: This will be a 30 minutes session</h1>
                </div>
              </div>
            </form>
          </div>
          <br />
          <Footer />
        </>
      )}
    </>
  );
};

export default BookForm;
