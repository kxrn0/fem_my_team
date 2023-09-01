import Form from "../../components/Form/Form.tsx";
import SoyEight from "../../soyjaks/SoyEight.tsx";
import SoyTen from "../../soyjaks/SoyTen.tsx";
import SCContact from "./Contact.styled.tsx";
import IconPerson from "../../icons/IconPerson.tsx";
import IconCog from "../../icons/IconCog.tsx";
import IconChart from "../../icons/IconChart.tsx";
import { useMemo } from "react";
import Topic, { TopicType } from "../../components/Topic/Topic.tsx";

export default function Contact() {
  const topics: TopicType[] = useMemo(
    () => [
      { Icon: IconPerson, body: "The quality of our talent network" },
      { Icon: IconCog, body: "Usage & implementation of our software" },
      { Icon: IconChart, body: "How we help drive innovation" },
    ],
    []
  );

  return (
    <SCContact>
      <SoyEight />
      <SoyTen />
      <div className="hero">
        <div className="intro">
          <h1 className="fs-h1-small reduced">Contact</h1>
          <h2 className="fs-h2-small">Ask us about</h2>
        </div>
        <ul className="topic-list">
          {topics.map((top, index) => (
            <li key={index}>
              <Topic {...top} />
            </li>
          ))}
        </ul>
      </div>
      <Form />
    </SCContact>
  );
}
