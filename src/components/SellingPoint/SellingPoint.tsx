import { FunctionComponent } from "react";
import SCSellingPoint from "./SellingPoint.styled.tsx";

interface Props {
  Icon: FunctionComponent;
  title: string;
  message: string;
}

export default function SellingPoint({ Icon, title, message }: Props) {
  return (
    <SCSellingPoint>
      <Icon />
      <div className="body">
        <h3 className="fs-h3">{title}</h3>
        <p className="fs-body-2">{message}</p>
      </div>
    </SCSellingPoint>
  );
}
