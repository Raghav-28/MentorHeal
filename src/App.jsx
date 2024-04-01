import { Route, Routes } from "react-router-dom";
import {
  About,
  BookForm,
  Home,
  How,
  Login,
  Mentor,
  ReadFull,
  Register,
  WhatsAppWidget,
  MentorApplication,
} from "./components";
import { Blog, EachBlog, MentorShipPage, ThankYou } from "./pages";
import { FindMentors } from "./features";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/:id" element={<ReadFull />} />
        <Route path="/join-as-mentor" element={<Mentor />} />
        <Route path="/join-as-mentor/apply" element={<MentorApplication />} />
        <Route path="/session" element={<BookForm />} />
        <Route path="/session/thank-you" element={<ThankYou />} />
        <Route path="/how" element={<How />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:blogid" element={<EachBlog />} />
        <Route path="/mentors" element={<FindMentors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mentor-ship-page" element={<MentorShipPage />} />
      </Routes>
      <WhatsAppWidget />
    </>
  );
};

export default App;
