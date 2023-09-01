import { FunctionComponent } from "react";
import SCTopic from "./Topic.styled.tsx";

export type TopicType = {
  Icon: FunctionComponent;
  body: string;
};

export default function Topic({ Icon, body }: TopicType) {
  return (
    <SCTopic>
      <Icon />
      <h3 className="fs-h3">{body}</h3>
    </SCTopic>
  );
}
