import React from 'react';
import PropTypes from 'prop-types';

export default ((ComposedComponent, defaultAnimationDuration) => {
  class ActivityIndicator extends React.Component {
    constructor(props) {
      super(props);
      this.getDelayStyle = this.getDelayStyle.bind(this);
      this.getFillStyle = this.getFillStyle.bind(this);
      this.getBorderStyle = this.getBorderStyle.bind(this);
    }
    getDelayStyle(delay) {
      const style = {}
      if (delay) {
        style.animationDelay = '-' + (delay * (1 / this.props.speed)) + 's';
      }
      return style;
    }
    getFillStyle(delay) {
      const style = this.getDelayStyle(delay);
      if (this.props.color) {
        style.backgroundColor = this.props.color;
      }
      return style;
    }
    getBorderStyle(delay) {
      const style = this.getDelayStyle(delay);
      if (this.props.color) {
        style.borderColor = this.props.color;
      }
      return style;
    }
    render() {
      if (!this.props.animating) {
        return null;
      }
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
      return (
          <div
            style={containerStyle}
            className={`rai-activity-indicator ${this.props.className}`}
          >
            <ComposedComponent
              getFillStyle={this.getFillStyle}
              getBorderStyle={this.getBorderStyle}
              style={indicatorStyle}
            />
          </div>
      );
    }
  }

  ActivityIndicator.propTypes = {
    animationDuration: PropTypes.number.isRequired,
    speed: PropTypes.number,
    animating: PropTypes.bool.isRequired,
  };

  ActivityIndicator.defaultProps = {
    animationDuration: defaultAnimationDuration,
    speed: 1,
    animating: true,
  };

  ActivityIndicator.displayName = ComposedComponent.name;

  return ActivityIndicator;
});
