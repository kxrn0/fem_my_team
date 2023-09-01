import Line from "../../components/Line/Line.tsx";
import IconPerson from "../../icons/IconPerson.tsx";
import IconCog from "../../icons/IconCog.tsx";
import IconChart from "../../icons/IconChart.tsx";
import SellingPoint from "../../components/SellingPoint/SellingPoint.tsx";

import SCHome from "./Home.styled.tsx";
import SoyOne from "../../soyjaks/SoyOne.tsx";
import SoyTwo from "../../soyjaks/SoyTwo.tsx";
import SoyThree from "../../soyjaks/SoyThree.tsx";
import SoyFour from "../../soyjaks/SoyFour.tsx";
import SoyFive from "../../soyjaks/SoyFive.tsx";

import kady from "../../assets/images/avatar-kady.jpg";
import aiysha from "../../assets/images/avatar-aiysha.jpg";
import arthur from "../../assets/images/avatar-arthur.jpg";

import Pseudofooter from "../../components/Pseudofooter/Pseudofooter.tsx";
import Testimonial from "../../components/Testimonial/Testimonial.tsx";
import { useMemo } from "react";

export default function Home() {
  const painPoints = useMemo(
    () => [
      {
        Icon: IconPerson,
        title: "Experienced Individuals",
        message:
          "Our network is made up of highly experienced professionals who are passionate about what they do.",
      },
      {
        Icon: IconCog,
        title: "Easy to Implement",
        message:
          "Our processes have been refined over years of implementation meaning our teams always deliver.",
      },
      {
        Icon: IconChart,
        title: "Enhanced Productivity",
        message:
          "Our customized platform with in-built analytics helps you manage your distributed teams.",
      },
    ],
    []
  );
  const testes = useMemo(
    () => [
      {
        body: "The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.",
        profile: {
          name: "Kady Baker",
          position: "Product Manager at Bookmark",
          photo: kady,
        },
      },
      {
        body: "We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!",
        profile: {
          name: "Aiysha Reese",
          position: "Founder of Manage",
          photo: aiysha,
        },
      },
      {
        body: "Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.",
        profile: {
          name: "Arthur Clarke",
          position: "Co-founder of MyPhysio",
          photo: arthur,
        },
      },
    ],
    []
  );

  return (
    <SCHome>
      <header className="hero">
        <SoyOne />
        <SoyTwo />
        <h1 className="hero-title fs-h1-large reduced">
          Find the best <span className="highlight">talent</span>
        </h1>
        <div className="hero-message">
          <Line />
          <p className="fs-body-1 reduced">
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
        </div>
      </header>
      <section className="selling-points">
        <SoyThree />
        <div className="slogan">
          <Line />
          <h2 className="fs-h2-large reduced">
            Build & manage distributed teams like no one else.
          </h2>
        </div>
        <ul className="points">
          {painPoints.map((point, index) => (
            <li key={index}>
              <SellingPoint {...point} />
            </li>
          ))}
        </ul>
      </section>
      <section className="testimonials">
        <SoyFour />
        <SoyFive />
        <h2 className="fs-h2-large reduced">
          Delivering real results for top companies. Some of our{" "}
          <span className="highlight">success stories.</span>
        </h2>
        <ul className="testes">
          {testes.map((test, index) => (
            <li key={index}>
              <Testimonial {...test} />
            </li>
          ))}
        </ul>
      </section>
      <Pseudofooter />
    </SCHome>
  );
}
