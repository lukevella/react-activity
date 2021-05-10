import "./Switch.css";

import React from "react";

const Switch: React.VoidFunctionComponent<{
  onChange: (active: boolean) => void;
  active?: boolean;
}> = ({ onChange, active = false }) => {
  return (
    <div
      onClick={() => onChange(!active)}
      className={`switch ${active ? "switch--on" : ""}`}
    >
      <div className="switch-trigger"></div>
    </div>
  );
};

export default Switch;
