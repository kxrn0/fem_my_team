import SoySix from "../../soyjaks/SoySix.tsx";
import { Link } from "wouter";
import SCPseudofooter from "./Pseudofooter.styled.tsx";

export default function Pseudofooter() {
  return (
    <SCPseudofooter>
      <SoySix />
      <h2 className="fs-h2-large reduced">Ready to get started?</h2>
      <Link className="button-primary dark fs-body-1" to="/fem_my_team/contact">
        contact us
      </Link>
    </SCPseudofooter>
  );
}
