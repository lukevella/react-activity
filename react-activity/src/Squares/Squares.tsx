import "./Squares.css";

import * as React from "react";
import ActivityIndicator from "../shared/ActivityIndicator";
import { ReactActivityIndicatorProps } from "../types";

const Squares: React.VoidFunctionComponent<ReactActivityIndicatorProps> = (
  props
) => {
  const squares: React.ReactElement[] = [];
  for (let i = 1; i <= 3; i++) {
    squares.unshift(
      <div
        key={i}
        className="rai-square"
        style={{ animationDelay: `-${i / 10}s` }}
      />
    );
  }
  return (
    <ActivityIndicator
      indicatorClassName="rai-squares"
      defaultAnimationDuration={0.8}
      {...props}
    >
      {squares}
    </ActivityIndicator>
  );
};

export default Squares;
