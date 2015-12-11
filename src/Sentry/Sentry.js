'use strict';
import React from 'react';
import ActivityIndicator from '../ActivityIndicator/ActivityIndicator';
import './Sentry.scss';

const Sentry = React.createClass({
  getDefaultProps() {
    return {
      animationDuration: 0.8,
      size: 30
    };
  },
  render() {
    let style = {};
    if (this.props.color) {
      style.borderColor = this.props.color
    };
    return (
      <ActivityIndicator className="rai-sentry" {...this.props}>
        <div className="rai-wave-container">
          <div className="rai-wave" style={style} />
        </div>
        <div className="rai-wave-container">
          <div className="rai-wave two" style={style} />
        </div>
      </ActivityIndicator>
    );
  }
});

export default Sentry;
