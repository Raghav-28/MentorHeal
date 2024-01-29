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
import { Blog, Community, EachBlog, MentorShipPage, ThankYou } from "./pages";
import { FindMentors, ReadFullQuestion } from "./features";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/session/thank-you" element={<ThankYou />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/:id" element={<ReadFull />} />
        <Route path="/join-as-mentor" element={<Mentor />} />
        <Route path="/join-as-mentor/apply" element={<MentorApplication />} />
        <Route path="/session" element={<BookForm />} />
        <Route path="/how" element={<How />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:blogid" element={<EachBlog />} />
        <Route path="/mentors" element={<FindMentors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/community" element={<Community />} />
        <Route path="/mentor-ship-page" element={<MentorShipPage />} />
        <Route path="/queries/:postid/" element={<ReadFullQuestion />} />
      </Routes>
      <WhatsAppWidget />
    </>
  );
};

export default App;
