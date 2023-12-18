import { useRef } from "react";
import {
  NavBar,
  Footer,
  HeroSection,
  Tagline,
  Why,
  Quote,
  Whatsup,
  LatestBlogs,
  Steps,
  TeamCard,
  Appointment,
  Form,
  Transformation,
  Card,
  FirstCard,
  Events,
} from "./index";
import {
  Authentic,
  Community,
  confidential,
  oneonone,
  Top,
} from "../assets/Why";
import { MGP } from "../Pages/index";
export default function Home() {
  // refs
  const formref = useRef();
  const testimonialref = useRef();

  const Scrolltoref = () => {
    formref.current.scrollIntoView({
      behaviour: "smooth ",
    });
  };
  const Scrolltotestimonial = () => {
    testimonialref.current.scrollIntoView({
      behaviour: "smooth ",
    });
  };


  const Data = [
    {
      image: oneonone,

      Tittle: "One on One Mentorship",
    },
    {
      image: Top,
      Tittle: "Top Mentors",
    },
    // {
    //   image: "",
    //   Tittle: "Experienced On-Site Mentors",
    // },
    {
      image: confidential,
      Tittle: "Confidential Conversations",
    },
    {
      image: Community,
      Tittle: "Commutiy Support",
    },
    {
      image: Authentic,
      Tittle: "Authentic Guidance",
    },
  ];

  const Data2 = [
    {
      image: oneonone,

      Tittle: "Safe Environment",
    },
    {
      image: Top,
      Tittle: "Supportive Community",
    },
    // {
    //   image: "",
    //   Tittle: "Experienced On-Site Mentors",
    // },
    {
      image: confidential,
      Tittle: "Monetise Expertise",
    },
    {
      image: Community,
      Tittle: "Exposure and Recognition",
    },
    {
      image: Authentic,
      Tittle: "Fulfillment and Satisfaction",
    },
  ];

  return (
    <body className="overflow-x-clip">
      <NavBar
        Scrolltoref={Scrolltoref}
        Scrolltotestimonial={Scrolltotestimonial}
      />
      <HeroSection Scrolltoref={Scrolltoref} />
      <FirstCard />
      <Tagline />
      <Card />
      <Why Data={Data} />
      <Steps />
      <Transformation testimonialref={testimonialref} />
      <TeamCard />
      {/* <MGP page={"home"}/> */}
      <Events         Scrolltoref={Scrolltoref}/>
      <Quote />
      <Whatsup />
      <LatestBlogs />
      <Appointment />
      <div ref={formref}>
        <Form />
      </div>
      <Footer Scrolltoref={Scrolltoref} />
    </body>
  );
}
