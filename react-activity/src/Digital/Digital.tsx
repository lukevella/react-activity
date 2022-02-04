import "./Digital.css";

import * as React from "react";
import { ReactActivityIndicatorProps } from "../types";
import ActivityIndicator from "../shared/ActivityIndicator";
import { getRelativeTime } from "../shared/getRelativeTime";

const Digital: React.VoidFunctionComponent<ReactActivityIndicatorProps> = ({
  speed = 1,
  ...rest
}) => {
  const rects: React.ReactElement[] = [];
  for (let i = 1; i <= 3; i++) {
    rects.unshift(
      <div
        key={i}
        style={{
          animationDelay: getRelativeTime(speed, i / -10),
        }}
      />
    );
  }

  return (
    <ActivityIndicator
      indicatorClassName="rai-digital"
      defaultAnimationDuration={0.8}
      speed={speed}
      {...rest}
    >
      {rects}
    </ActivityIndicator>
  );
};

export default Digital;
