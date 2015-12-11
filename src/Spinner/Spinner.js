import React from 'react';
import activityIndicator from '../activityIndicator';
import './Spinner.scss';

const defaultProps = {
  animationDuration: 0.8
};

const Spinner = React.createClass({
  getDefaultProps() {
    return defaultProps;
  },
  render() {
    let style = {};
    if (this.props.color) {
      style.borderColor = this.props.color
    };
    return (
      <div className="rai-spinner" style={style}>
      </div>
    );
  }
});

export default activityIndicator(Spinner, defaultProps);
