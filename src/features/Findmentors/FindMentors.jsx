import { useState, useReducer } from "react";
import { HeroSection, Mentors } from "./../";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { Loader, NavBar, Footer } from "../../components";
import { mentorsContext } from "./context";
import Data from "../../data/MentorShipCategories";

const Sorting = (state, action) => {
  switch (action.type) {
    case "rating":
      const mentors = state;
      const valRating = mentors.map((value) => {
        const rate = value.rating ? value.rating : 0;
        value.rating = rate;
        return value;
      });
      // console.log(`After putting values `, val);
      const res = valRating.sort((a, b) => {
        // console.log(`the ratings ${a.rating} ${b.rating}`);
        return a.rating - b.rating;
      });
      res.reverse();
      // console.log(`The sorted rating`, res);
      // const message = `A new anecdote ${action.anecdote.content} has been added`;
      return res;
    case "sessions":
      const mentorSession = state;
      const valSession = mentorSession.map((value) => {
        const sessions = value.sessions ? value.sessions : 0;
        value.sessions = sessions;
        return value;
      });
      // console.log(`After putting values `, val);
      const sortedSession = valSession.sort((a, b) => {
        // console.log(`the votes ${a.sessions} ${b.sessions}`);
        return a.sessions - b.sessions;
      });
      sortedSession.reverse();
      // console.log(`The sorted sessions`, sortedSession);
      return sortedSession;
    case "exp":
      const mentorExp = state;
      const sortedExp = mentorExp.sort((a, b) => {
        // console.log(`the names ${a.name} ${b.name}`);
        if (a.exp < b.exp) {
          return -1;
        }
        if (a.exp > b.exp) {
          return 1;
        }
        return 0;
      });
      sortedExp.reverse();
      // console.log(`The sorted names`, sortedName);
      return sortedExp;
    case "insert":
      // console.log(`executed `, ...action.mentors);
      return action.mentors;
    default:
      return state;
  }
};
const FindMentors = () => {
  const categories = Data.map((val) => {
    return { category: val.toLowerCase().trim(), filter: false };
  });
  // console.log(categories);

  const [filterCategory, setfilterCategory] = useState(categories);
  const [sorting, setSorting] = useReducer(Sorting, null);

  const docref = collection(db, "mentors");
  const [docs, loading, error] = useCollectionData(docref);

  if (error) {
    alert("Error fetching");
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main>
          <mentorsContext.Provider value={[sorting, setSorting]}>
            <NavBar />
            <HeroSection mentors={docs} setfilterCategory={setfilterCategory} />
            <Mentors
              setfilterCategory={setfilterCategory}
              filterCategory={filterCategory}
              mentors={docs}
            />
            <Footer />
          </mentorsContext.Provider>
        </main>
      )}
    </>
  );
};

export default FindMentors;
