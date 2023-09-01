import { FunctionComponent, useState } from "react";
import IconPlus from "../../icons/IconPlus.tsx";
import SCProfile from "./Profile.styled.tsx";

type Social = {
  link: string;
  Icon: FunctionComponent;
};

export type ProfileType = {
  photo: string;
  name: string;
  position: string;
  comment: string;
  socials: Social[];
};

export default function Profile({
  photo,
  name,
  position,
  comment,
  socials,
}: ProfileType) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <SCProfile className={isFlipped ? "flipped" : ""}>
      <div className={`content ${isFlipped ? "flipped" : ""}`}>
        <div className="front">
          <img src={photo} alt={name} />
          <div className="details">
            <h3 className="fs-h3">{name}</h3>
            <p className="fs-body-3">{position}</p>
          </div>
          <button onClick={() => setIsFlipped(true)}>
            <IconPlus />
          </button>
        </div>
        <div className="back">
          <div className="details">
            <h3 className="fs-h3">{name}</h3>
            <p className="fs-body-2">“{comment}”</p>
          </div>
          <div className="socials">
            {socials.map(({ link, Icon }, index) => (
              <a
                key={index}
                className="social-link"
                href={link}
                target="_blank"
              >
                <Icon />
              </a>
            ))}
          </div>
          <button onClick={() => setIsFlipped(false)}>
            <IconPlus />
          </button>
        </div>
      </div>
    </SCProfile>
  );
}
