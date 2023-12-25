import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Appointment,
  CardAbout,
  Footer,
  HeroAbout,
  NavBar,
  OurMission,
  OurStory,
  OurVision,
  Prophecy,
} from "./";

const AboutUs = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <section>
      <NavBar />

      {/* Herosection........ */}
      <HeroAbout />

      {/* <OurStory /> */}
      <OurStory />

      {/* Our mission section..... */}
      <div className="lg:pt-20">
        <OurMission />
      </div>

      {/* Our Vision Section...... */}
      <OurVision />

      {/* MentorHeal Prophecy...... */}
      <Prophecy />

      {/* About the team...... */}
      <CardAbout />

      <Appointment />

      <Footer />
    </section>
  );
};

export default AboutUs;
