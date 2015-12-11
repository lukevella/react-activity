'use strict';

import React from 'react';
import ActivityIndicator from '../ActivityIndicator/ActivityIndicator';
import './Levels.scss';

const Levels = React.createClass({
  getDefaultProps() {
    return {
      animationDuration: 1.5,
      size: 20
    }
  },
  render() {
    let style = {};
    if (this.props.color) {
      style.backgroundColor = this.props.color
    };
    return (
      <ActivityIndicator className="rai-levels" {...this.props}>
        <div className="rai-bar" style={style} />
        <div className="rai-bar two" style={style} />
        <div className="rai-bar three" style={style} />
      </ActivityIndicator>
    );
  }
});

export default Levels;
