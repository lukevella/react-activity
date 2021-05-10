import * as React from "react";
import { ReactActivityIndicatorProps } from "../../types";
import { getRelativeTime } from "../getRelativeTime";

interface ActivityIndicatorProps extends ReactActivityIndicatorProps {
  defaultAnimationDuration: number;
  className?: string;
  children?: React.ReactNode;
}

const ActivityIndicator: React.VoidFunctionComponent<ActivityIndicatorProps> = ({
  style,
  size = 16,
  speed = 1,
  defaultAnimationDuration,
  color,
  className,
  animating = true,
  children,
}) => {
  if (!animating) {
    return null;
  }

  const animationDuration = getRelativeTime(speed, defaultAnimationDuration);
  return (
    <div
      data-testid="rai-activity-indicator"
      className={`rai-container ${className}`}
      style={{
        color,
        fontSize: `${size}px`,
        animationDuration,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default ActivityIndicator;
