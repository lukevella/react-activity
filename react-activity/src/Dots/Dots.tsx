import "./Dots.css";

import * as React from "react";
import ActivityIndicator from "../shared/ActivityIndicator";
import { ReactActivityIndicatorProps } from "../types";
import { getRelativeTime } from "../shared/getRelativeTime";

const Dots: React.VoidFunctionComponent<ReactActivityIndicatorProps> = ({
  speed = 1,
  ...rest
}) => {
  return (
    <ActivityIndicator
      indicatorClassName="rai-dots"
      speed={speed}
      defaultAnimationDuration={0.8}
      {...rest}
    >
      <div
        className="rai-circle"
        style={{ animationDelay: getRelativeTime(speed, -0.3) }}
      />
      <div
        className="rai-circle"
        style={{ animationDelay: getRelativeTime(speed, -0.2) }}
      />
      <div
        className="rai-circle"
        style={{ animationDelay: getRelativeTime(speed, -0.1) }}
      />
    </ActivityIndicator>
  );
};

export default Dots;
