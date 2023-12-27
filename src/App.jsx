import { Route, Routes } from "react-router-dom";
import {
  AboutUs,
  BookForm,
  Home,
  How,
  Mentor,
  ReadFull,
  WhatsAppWidget,
} from "./components";
import {
  Blog,
  Community,
  ReadFullBlog,
  Mentors,
  MentorShipPage,
} from "./pages";
import { FindMentors, ReadFullQuestion, Signup } from "./features";
import Join from "./pages/Join";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/:id" element={<ReadFull />} />
        <Route path="/join-as-mentor" element={<Mentor />} />
        <Route path="/session" element={<BookForm />} />
        <Route path="/how" element={<How />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<ReadFullBlog />} />
        <Route path="/mentors" element={<FindMentors />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/join" element={<Join />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/community" element={<Community />} />
        <Route path="/Mentor-Ship-Page" element={<MentorShipPage />} />
        <Route path="/queries/:postid/" element={<ReadFullQuestion />} />
      </Routes>
      <WhatsAppWidget />
    </>
  );
};

export default App;
