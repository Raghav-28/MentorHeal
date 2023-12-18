import { PostQuestion, Posts } from "../features/index";
import { NavBar } from "../components";

export default function Community() {
  return (
    <>
      <main>
        <NavBar />
        <PostQuestion />
        <Posts />
      </main>
    </>
  );
}
