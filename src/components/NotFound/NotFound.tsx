import SoyFour from "../../soyjaks/SoyFour.tsx";
import SoySeven from "../../soyjaks/SoySeven.tsx";
import SCNotFound from "./NotFound.styled.tsx";

export default function NotFound() {
  return (
    <SCNotFound>
      <SoySeven />
      <SoyFour />
      <h1 className="fs-h1-large">
        40<span className="highlight">4</span>
      </h1>
      <p className="fs-h2-small">page not found!</p>
    </SCNotFound>
  );
}
