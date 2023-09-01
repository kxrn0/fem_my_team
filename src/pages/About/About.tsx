import Line from "../../components/Line/Line.tsx";
import Profile, { ProfileType } from "../../components/Profile/Profile.tsx";
import SCAbout from "./About.styled.tsx";
import IconFacebook from "../../icons/IconFacebook.tsx";
import IconPinterest from "../../icons/IconPinterest.tsx";
import nikita from "../../assets/images/avatar-nikita.jpg";
import christian from "../../assets/images/avatar-christian.jpg";
import cruz from "../../assets/images/avatar-cruz.jpg";
import drake from "../../assets/images/avatar-drake.jpg";
import griffith from "../../assets/images/avatar-griffith.jpg";
import aden from "../../assets/images/avatar-aden.jpg";
import { useMemo } from "react";
import IconTwitter from "../../icons/IconTwitter.tsx";
import IconLinked from "../../icons/IconLinked.tsx";
import IconFourChan from "../../icons/IconFourChan.tsx";
import SoySeven from "../../soyjaks/SoySeven.tsx";
import SoyEight from "../../soyjaks/SoyEight.tsx";
import SoyFour from "../../soyjaks/SoyFour.tsx";
import SoyNine from "../../soyjaks/SoyNine.tsx";
import verge from "../../assets/images/logo-the-verge.png";
import jak from "../../assets/images/logo-jakarta-post.png";
import guardian from "../../assets/images/logo-the-guardian.png";
import radar from "../../assets/images/logo-tech-radar.png";
import gadgets from "../../assets/images/logo-gadgets-now.png";
import Pseudofooter from "../../components/Pseudofooter/Pseudofooter.tsx";

export default function About() {
  const clients = useMemo(
    () => [
      { name: "The Verge", image: verge },
      { name: "The Soyjax Post", image: jak },
      { name: "The Guardian", image: guardian },
      { name: "Tech Radar", image: radar },
      { name: "Gadgets Now", image: gadgets },
    ],
    []
  );
  const directors: ProfileType[] = useMemo(
    () => [
      {
        name: "Nikita Marks",
        position: "Founder & CEO",
        comment:
          "It always amazes me how much talent there is in every corner of the globe.",
        photo: nikita,
        socials: [
          { link: "https://nitter.net", Icon: IconTwitter },
          {
            link: "https://www.youtube.com/watch?v=XkugpuoXsjo",
            Icon: IconPinterest,
          },
        ],
      },
      {
        name: "Cristian Duncan",
        position: "Co-founder & COO",
        comment:
          "Distributed teams required unique processes. You need to approach work in a new way.",
        photo: christian,
        socials: [
          {
            link: "https://www.youtube.com/watch?v=Opk_kqU1wX8",
            Icon: IconLinked,
          },
          {
            link: "https://www.youtube.com/watch?v=51GIxXFKbzk",
            Icon: IconTwitter,
          },
          {
            link: "https://www.youtube.com/watch?v=w4QODL67T7Q",
            Icon: IconFacebook,
          },
        ],
      },
      {
        name: "Cruz Hamer",
        position: "Co-founder & CTO",
        comment:
          "Technology is at the forefront of enabling distributed teams. That's where we come in.",
        photo: cruz,
        socials: [
          {
            link: "https://www.youtube.com/watch?v=k7zZPx60Gms",
            Icon: IconFacebook,
          },
          {
            link: "https://www.youtube.com/watch?v=EyGZpmL5qZQ",
            Icon: IconTwitter,
          },
          {
            link: "https://www.youtube.com/watch?v=RQx9kD0jWQs",
            Icon: IconLinked,
          },
        ],
      },
      {
        name: "Drake Heaton",
        position: "Business Development Lead",
        comment:
          "Hiring similar people from similar backgrounds is a surefire way to stunt innovation.",
        photo: drake,
        socials: [
          {
            link: "https://www.youtube.com/watch?v=sn6HWWrKqSE",
            Icon: IconFacebook,
          },
          { link: "https://4chan.org/g/catalog", Icon: IconFourChan },
        ],
      },
      {
        name: "Griffith",
        position: "Mercenary leader",
        comment:
          "Unrelated to one's social standing there are some people who, by nature, are keys that set the world in motion",
        photo: griffith,
        socials: [
          {
            link: "https://www.youtube.com/watch?v=fbJiRfIp_cU",
            Icon: IconFourChan,
          },
        ],
      },
      {
        name: "Aden Allan",
        position: "Head of Talent",
        comment:
          "Empowered teams create truly amazing products. Set the north star and let them follow it.",
        photo: aden,
        socials: [
          {
            link: "https://www.youtube.com/watch?v=VK9h7234eOY",
            Icon: IconPinterest,
          },
          {
            link: "https://www.youtube.com/watch?v=VwzRLgJorYQ",
            Icon: IconFacebook,
          },
          {
            link: "https://www.youtube.com/watch?v=z68TX6cyS6w",
            Icon: IconFourChan,
          },
        ],
      },
    ],
    []
  );

  return (
    <SCAbout>
      <header className="hero">
        <SoySeven />
        <h1 className="hero-title fs-h1-small reduced">About</h1>
        <div className="hero-message">
          <Line />
          <p className="fs-body-1">
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We’ll bring those teams to you.
          </p>
        </div>
      </header>
      <section className="directors">
        <SoyEight />
        <SoyFour />
        <h2 className="directors-title fs-h2-large reduced">Meet the directors</h2>
        <ul className="director-list">
          {directors.map((dir, index) => (
            <li key={index}>
              <Profile {...dir} />
            </li>
          ))}
        </ul>
      </section>
      <section className="clients">
        <SoyNine />
        <h2 className="clients-title fs-h2-large reduced">Some of our clients</h2>
        <div className="client-list">
          {clients.map((client, index) => (
            <img key={index} src={client.image} alt={client.name} />
          ))}
        </div>
      </section>
      <Pseudofooter />
    </SCAbout>
  );
}
