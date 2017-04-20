import React from 'react';
import activityIndicator from '../activityIndicator';

const Spinner = (props) => (
  <div style={props.style} className="rai-spinner" >
    <div className="rai-spinner-outer" style={props.getBorderStyle()} />
    <div className="rai-spinner-inner" style={props.getBorderStyle()} />
  </div>
);

export default activityIndicator(Spinner, 0.6);
