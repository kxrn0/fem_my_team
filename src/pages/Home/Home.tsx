import Line from "../../components/Line/Line.tsx";
import IconPerson from "../../icons/IconPerson.tsx";
import IconCog from "../../icons/IconCog.tsx";
import IconChart from "../../icons/IconChart.tsx";
import SellingPoint from "../../components/SellingPoint/SellingPoint.tsx";

import SCHome from "./Home.styled.tsx";

export default function Home() {
  return (
    <SCHome>
      <header className="hero">
        <h1 className="hero-title">Find the best talent</h1>
        <div className="hero-message">
          <Line />
          <p>
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
        </div>
      </header>
      <section>
        <div className="slogan">
          <Line />
          <h2>Build & manage distributed teams like no one else.</h2>
          <ul>
            <li>
              <SellingPoint
                Icon={IconPerson}
                title="Experienced Individuals"
                message="Our network is made up of highly experienced professionals who are passionate about what they do."
              />
            </li>
            <li>
              <SellingPoint
                Icon={IconCog}
                title="Easy to Implement"
                message="Our processes have been refined over years of implementation meaning our teams always deliver."
              />
            </li>
            <li>
              <SellingPoint
                Icon={IconChart}
                title="Enhanced Productivity"
                message="Our customized platform with in-built analytics helps you manage your distributed teams."
              />
            </li>
            <IconCog />
          </ul>
        </div>
      </section>
    </SCHome>
  );
}
