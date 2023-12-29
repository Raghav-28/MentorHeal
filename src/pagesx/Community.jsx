import { PostQuestion, Posts } from "../features";
import { NavBar } from "../components";

const Community = () => {
  return (
    <main>
      <NavBar />
      <PostQuestion />
      <Posts />
    </main>
  );
};

export default Community;
