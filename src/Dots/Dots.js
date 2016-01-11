import React from 'react';
import activityIndicator from '../activityIndicator';

const Dots = React.createClass({
  render() {
    return (
      <div className="rai-dots" {...this.props}>
        <div
          className="rai-circle"
          style={this.props.getFillStyle(0.3)}
        />
        <div
          className="rai-circle"
          style={this.props.getFillStyle(0.2)}
        />
        <div
          className="rai-circle"
          style={this.props.getFillStyle(0.1)}
        />
      </div>
    );
  }
});

export default activityIndicator(Dots, 0.8, 40);
