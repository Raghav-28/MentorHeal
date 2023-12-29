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

const About = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <section>
      <NavBar />
      <HeroAbout />
      <OurStory />
      <div className="lg:pt-20">
        <OurMission />
      </div>
      <OurVision />
      <Prophecy />
      <CardAbout />
      <Appointment />
      <Footer />
    </section>
  );
};

export default About;
