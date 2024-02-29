import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import dayjs from "dayjs";
// import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { server } from "../api";
import { auth, db } from "../config/firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { Carddata, Footer, Loader, NavBar } from "./";
import { useAuthState } from "react-firebase-hooks/auth";
import useRazorpay from "react-razorpay";
// import emailjs from "@emailjs/browser";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import moment from "moment";

const BookForm = () => {
  const [user, loadingAuth, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [loadingName, setLoadingName] = useState(true);
  const [paymentCapture, setPaymentCapture] = useState(false);

  const [date, setDate] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    category: "Career",
  });
  const [Razorpay] = useRazorpay();

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

  const handlePaymentAttempts = async ({
    success,
    error = {},
    order_id,
    payment_id,
    signature = null,
  }) => {
    await addDoc(collection(db, "payment-attempts"), {
      success,
      razorpay_order_id: order_id,
      razorpay_payment_id: payment_id,
      razorpay_signature: signature,
      error,
      userUID: user?.uid,
      createdAt: new Date(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setPaymentCapture(true);

    const sessionFee = 599 * 100;

    let order_id = null;

    if (Object.values(form).every((i) => i == "")) {
      toast.error("Please fill the all the details");
    } else {
      const { data } = await server.post("/api/payment/create-order", {
        amount: sessionFee,
      });

      if (!data.success) return toast.error(data.error);
      if (data.data.amount !== sessionFee)
        return toast.error("Anomaly Detected! Aborting!");

      order_id = data.data.order_id;

      const options = {
        key: import.meta.env.VITE_RZPAY_KEY_ID,
        amount: sessionFee,
        currency: "INR",
        name: "MentorHeal",
        order_id: order_id,
        handler: (res) => {
          console.log(res);
          handlePaymentAttempts({
            success: true,
            error: {},
            order_id: res.razorpay_order_id,
            payment_id: res.razorpay_payment_id,
            signature: res.razorpay_signature,
          });
          sendConfirmation({
            order_id: res.razorpay_order_id,
            payment_id: res.razorpay_payment_id,
            signature: res.razorpay_signature,
          });
          navigate("/session/thank-you");
        },
        prefill: {
          name: form.name,
          email: user?.email,
          contact: form.phone,
        },
        image: "/brand/logo.png",
        theme: {
          color: "#4a7999",
        },
      };
      const rzp1 = new Razorpay(options);
      rzp1.on("payment.failed", async (res) => {
        console.log(res);
        await handlePaymentAttempts({
          success: false,
          error: res.error,
          order_id: order_id,
          payment_id: res.error.metadata.payment_id,
          signature: null,
        });
        return toast.error(res.error.description);
      });
      rzp1.open();
    }

    setPaymentCapture(false);
  };

  const sendConfirmation = async ({ order_id, payment_id, signature }) => {
    const sessionDate = new Date(date);
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
      razorpay_order_id: order_id,
      razorpay_payment_id: payment_id,
      razorpay_signature: signature,
    });
    // let templateParams = {
    //   userName: name,
    //   userEmail: user?.email,
    //   sessionDate: sessionDate.toString(),
    // };
    await server
      .post("/api/mail/send-session-confirmation", {
        name: form.name,
        email: user?.email,
        bookedFor: sessionDate.toString(),
      })
      .then((res) => {
        if (res.data.success) toast.success("Confirmation email sent! 🚀");
        else toast.error("Couldn't send confirmation email");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Couldn't send confirmation email");
      });
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
      toast.error("An error occured while fetching user data");
    }
    setLoadingName(false);
  };

  useEffect(() => {
    if (loadingAuth) return;
    if (!user) navigate("/login");
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
                    type="tel"
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
              <div className="bg-white text-gray-700 shadow-md py-8 mx-4 p-4 flex flex-col flex-wrap gap-4 border border-gray-300 rounded-lg basis-96 lg:mt-36">
                <h2 className="text-xl font-medium">Session Details</h2>
                <div className="flex flex-row justify-between">
                  <h1>Session charge</h1>
                  <h1>INR 599.00</h1>
                </div>
                <div className="flex flex-row justify-between">
                  <h1>Others</h1>
                  <h1>INR 0.00</h1>
                </div>
                <div className="relative flex items-center">
                  <div className="flex-grow border-t border-gray-700"></div>
                </div>
                <div className="flex pb-4 flex-row justify-between">
                  <h1>Total</h1>
                  <h1>INR 599.00</h1>
                </div>
                <button
                  className="w-full font-semibold text-sm px-2 py-2 bg-[#4a7999] text-white duration-300 ease-in-out rounded-full border-2 flex justify-center gap-1"
                  // "px-14 py-2.5 text-sm tracking-wide text-black bg-white rounded-full font-kanit mt-5 border-[#4a7999] border-4"
                  type="submit"
                >
                  {paymentCapture && <Loader />}
                  Proceed To Pay{" "}
                  <ArrowForwardOutlinedIcon
                    sx={{ paddingTop: "0" }}
                    fontSize="small"
                  />
                </button>
                <ToastContainer />
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
