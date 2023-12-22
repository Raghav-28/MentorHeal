import React, { useState } from "react";
import { HeroSection, Mentors } from "./../index";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { Loader, NavBar, Footer } from "../../components/index";

export default function FindMentors() {
  const [filterCategeory, setfilterCategeory] = useState();

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
          <NavBar />
          <HeroSection setfilterCategeory={setfilterCategeory} />
          <Mentors filterCategeory={filterCategeory} mentors={docs} />
          <Footer />
        </main>
      )}
    </>
  );
}
