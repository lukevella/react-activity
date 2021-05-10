import "./Windmill.css";

import * as React from "react";
import { ReactActivityIndicatorProps } from "../types";
import ActivityIndicator from "../shared/ActivityIndicator";

const Windmill: React.FunctionComponent<ReactActivityIndicatorProps> = (
  props
) => {
  return (
    <ActivityIndicator
      className="rai-windmill"
      defaultAnimationDuration={0.8}
      {...props}
    />
  );
};

export default Windmill;
