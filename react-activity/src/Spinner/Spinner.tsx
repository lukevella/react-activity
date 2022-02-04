import "./Spinner.css";

import * as React from "react";
import { ReactActivityIndicatorProps } from "../types";
import ActivityIndicator from "../shared/ActivityIndicator";

const Spinner: React.VoidFunctionComponent<ReactActivityIndicatorProps> = (
  props
) => {
  return (
    <ActivityIndicator
      indicatorClassName="rai-spinner"
      defaultAnimationDuration={0.6}
      {...props}
    >
      <div className="rai-spinner-outer" />
      <div className="rai-spinner-inner" />
    </ActivityIndicator>
  );
};

export default Spinner;
