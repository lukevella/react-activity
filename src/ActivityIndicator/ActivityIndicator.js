'use strict';
import React, {PropTypes} from 'react';
import './ActivityIndicator.scss';

const ActivityIndicator = React.createClass({
  propTypes: {
    size: PropTypes.number,
    color: PropTypes.string,
    speed: PropTypes.number.isRequired
  },
  getDefaultProps() {
    return {
      speed: 1
    };
  },
  render() {
    const style = {};
    if (this.props.size) {
      // We adjust the size of the component by changing the font-size of the
      // outer container. Since all the measurements are in ems the component
      // scales accordingly.
      style.fontSize = this.props.size;
    }
    style.animationDuration = (this.props.animationDuration) * (1 / this.props.speed) + 's';
    return (
      <div className={'rai-activity-indicator ' + this.props.className} style={style}>
        {this.props.children}
      </div>
    );
  }
});

export default ActivityIndicator;
