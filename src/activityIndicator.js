'use strict';
import React, {PropTypes} from 'react';

export default ((ComposedComponent, defaultAnimationDuration) => {
  return React.createClass({
    displayName: ComposedComponent.displayName,
    propTypes: {
      animationDuration: PropTypes.number.isRequired,
      speed: PropTypes.number
    },
    getDefaultProps() {
      return {
        animationDuration: defaultAnimationDuration,
        speed: 1
      };
    },
    getDelayStyle(delay) {
      const style = {}
      if (delay) {
        style.animationDelay = '-' + (delay * (1 / this.props.speed)) + 's';
      }
      return style;
    },
    getFillStyle(delay) {
      const style = this.getDelayStyle(delay);
      if (this.props.color) {
        style.backgroundColor = this.props.color;
      }
      return style;
    },
    getBorderStyle(delay) {
      const style = this.getDelayStyle(delay);
      if (this.props.color) {
        style.borderColor = this.props.color;
      }
      return style;
    },
    render() {
      const style = {
        animationDuration: this.props.animationDuration
      };
      if (this.props.size) {
        style.fontSize = this.props.size
      }
      style.animationDuration = style.animationDuration * (1 / this.props.speed) + 's';
      return (
          <div className={`rai-activity-indicator ${this.props.className}`}>
            <ComposedComponent {...this.props}
              getFillStyle={this.getFillStyle}
              getBorderStyle={this.getBorderStyle}
              style={style}
            />
          </div>
      );
    }
  });
});
