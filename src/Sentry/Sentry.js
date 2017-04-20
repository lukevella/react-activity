'use strict';
import React from 'react';
import activityIndicator from '../activityIndicator';

const Sentry = (props) => (
  <div style={props.style} className="rai-sentry">
    <div className="rai-wave-container">
      <div className="rai-wave" style={props.getBorderStyle(0)} />
    </div>
    <div className="rai-wave-container">
      <div className="rai-wave" style={props.getBorderStyle(0.4)} />
    </div>
  </div>
);

export default activityIndicator(Sentry, 0.8);
