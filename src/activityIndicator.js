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
      const containerStyle = {
        display: 'inline-block',
        fontSize: '16px',
        lineHeight: '0'
      };
      const indicatorStyle = {
        animationDuration: this.props.animationDuration * (1 / this.props.speed) + 's'
      };
      if (this.props.size) {
        indicatorStyle.fontSize = this.props.size
      }
      let className = 'rai-activity-indicator';
      className += this.props.className ? ` ${this.props.className}` : '';
      return (
          <div style={containerStyle} className={this.props.className}>
            <ComposedComponent {...this.props}
              getFillStyle={this.getFillStyle}
              getBorderStyle={this.getBorderStyle}
              style={indicatorStyle}
            />
          </div>
      );
    }
  });
});
