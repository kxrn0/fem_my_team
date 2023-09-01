import IconQuotes from "../../icons/IconQuotes.tsx";
import SCTestimonial from "./Testimonial.styled.tsx";

interface Props {
  body: string;
  profile: { name: string; position: string; photo: string };
}

export default function Testimonial({ body, profile }: Props) {
  return (
    <SCTestimonial>
      <IconQuotes />
      <p className="body fs-body-2">“{body}”</p>
      <div className="profile">
        <div className="details">
          <h3 className="fs-h3">{profile.name}</h3>
          <p className="fs-body-4">{profile.position}</p>
        </div>
        <img
          src={profile.photo}
          alt={`${profile.name}, ${profile.position}`}
        />
      </div>
    </SCTestimonial>
  );
}
