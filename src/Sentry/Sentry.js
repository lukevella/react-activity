'use strict';
import React from 'react';
import activityIndicator from '../activityIndicator';

const Sentry = React.createClass({
  render() {
    return (
      <div style={this.props.style} className="rai-sentry">
        <div className="rai-wave-container">
          <div className="rai-wave" style={this.props.getBorderStyle(0)} />
        </div>
        <div className="rai-wave-container">
          <div className="rai-wave" style={this.props.getBorderStyle(0.4)} />
        </div>
      </div>
    );
  }
});

export default activityIndicator(Sentry, 0.8);
