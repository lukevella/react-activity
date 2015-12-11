import React from 'react';
import ActivityIndicator from '../ActivityIndicator/ActivityIndicator';
import './Dots.scss';

const Dots = React.createClass({
  getDefaultProps() {
    return {
      animationDuration: 0.8,
      size: 40
    };
  },
  render() {
    let style = {};
    if (this.props.color) {
      style.backgroundColor = this.props.color
    };
    return (
      <ActivityIndicator className="rai-dots" {...this.props}>
        <div className="rai-circle one" style={style} />
        <div className="rai-circle two" style={style} />
        <div className="rai-circle three" style={style} />
      </ActivityIndicator>
    );
  }
});

export default Dots;
