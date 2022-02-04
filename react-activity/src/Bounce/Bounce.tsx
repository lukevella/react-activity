import "./Bounce.css";

import * as React from "react";
import { ReactActivityIndicatorProps } from "../types";
import ActivityIndicator from "../shared/ActivityIndicator";
import { getRelativeTime } from "../shared/getRelativeTime";

const Bounce: React.VoidFunctionComponent<ReactActivityIndicatorProps> = ({
  speed = 1,
  ...rest
}) => {
  const renderSquares = () => {
    const res = [];
    for (let i = 1; i <= 3; i++) {
      res.unshift(
        <div
          key={i}
          style={{
            animationDelay: getRelativeTime(speed, i / -10),
          }}
        />
      );
    }
    return res;
  };

  return (
    <ActivityIndicator
      indicatorClassName="rai-bounce"
      speed={speed}
      defaultAnimationDuration={0.8}
      {...rest}
    >
      {renderSquares()}
    </ActivityIndicator>
  );
};

export default Bounce;
