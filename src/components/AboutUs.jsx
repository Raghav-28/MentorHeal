import OurStory from "./OurStory";
import OurMission from "./OurMission";
import HeroAbout from "./HeroAbout";
import OurVision from "./OurVision";
import Prophecy from "./Prophecy";
import NavBar from "./NavBar";
import Footer from "./Footer";
import CardAbout from "./CardAbout";
import Appointment from "./Appointment";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Whatsup from "./Whatsup";

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

      {/* our story...... */}

      {/* <OurStory /> */}

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

      <Whatsup />
      <Appointment />
      <Footer />
    </section>
  );
};

export default AboutUs;
