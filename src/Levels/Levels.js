'use strict';

import React from 'react';
import activityIndicator from '../activityIndicator';

const Levels = React.createClass({
  render() {
    return (
      <div style={this.props.style} className="rai-levels">
        <div className="rai-levels-container">
          <div className="rai-bar" style={this.props.getFillStyle()} />
          <div className="rai-bar" style={this.props.getFillStyle(0.25)} />
          <div className="rai-bar" style={this.props.getFillStyle(0.4)} />
        </div>
      </div>
    );
  }
});

export default activityIndicator(Levels, 1.5);
