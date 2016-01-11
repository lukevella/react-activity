'use strict';

import React from 'react';
import activityIndicator from '../activityIndicator';

const Levels = React.createClass({
  render() {
    return (
      <div className="rai-levels" {...this.props}>
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
