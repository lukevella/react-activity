import "./Sentry.css";

import * as React from "react";
import ActivityIndicator from "../shared/ActivityIndicator";
import { ReactActivityIndicatorProps } from "../types";
import { getRelativeTime } from "../shared/getRelativeTime";

const Sentry: React.VoidFunctionComponent<ReactActivityIndicatorProps> = ({
  speed = 1,
  ...rest
}) => {
  return (
    <ActivityIndicator
      indicatorClassName="rai-sentry"
      speed={speed}
      defaultAnimationDuration={0.8}
      {...rest}
    >
      <div className="rai-wave-container">
        <div className="rai-wave" />
      </div>
      <div className="rai-wave-container">
        <div
          className="rai-wave"
          style={{ animationDelay: getRelativeTime(speed, -0.4) }}
        />
      </div>
    </ActivityIndicator>
  );
};

export default Sentry;
