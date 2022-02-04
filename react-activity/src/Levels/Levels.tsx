import "./Levels.css";

import * as React from "react";
import ActivityIndicator from "../shared/ActivityIndicator";
import { ReactActivityIndicatorProps } from "../types";
import { getRelativeTime } from "../shared/getRelativeTime";

const Levels: React.VoidFunctionComponent<ReactActivityIndicatorProps> = ({
  speed = 1,
  ...rest
}) => {
  return (
    <ActivityIndicator
      indicatorClassName="rai-levels"
      speed={speed}
      defaultAnimationDuration={1.5}
      {...rest}
    >
      <div className="rai-levels-container">
        <div className="rai-bar" />
        <div
          className="rai-bar"
          style={{ animationDelay: getRelativeTime(speed, -0.25) }}
        />
        <div
          className="rai-bar"
          style={{ animationDelay: getRelativeTime(speed, -0.4) }}
        />
      </div>
    </ActivityIndicator>
  );
};

export default Levels;
