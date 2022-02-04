import "./Windmill.css";

import * as React from "react";
import { ReactActivityIndicatorProps } from "../types";
import ActivityIndicator from "../shared/ActivityIndicator";

const Windmill: React.VoidFunctionComponent<ReactActivityIndicatorProps> = (
  props
) => {
  return (
    <ActivityIndicator
      indicatorClassName="rai-windmill"
      defaultAnimationDuration={0.8}
      {...props}
    />
  );
};

export default Windmill;
