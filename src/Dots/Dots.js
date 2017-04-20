import React from 'react';
import activityIndicator from '../activityIndicator';

const Dots = (props) => (
  <div style={props.style} className="rai-dots">
    <div
      className="rai-circle"
      style={props.getFillStyle(0.3)}
    />
    <div
      className="rai-circle"
      style={props.getFillStyle(0.2)}
    />
    <div
      className="rai-circle"
      style={props.getFillStyle(0.1)}
    />
  </div>
);

export default activityIndicator(Dots, 0.8);
