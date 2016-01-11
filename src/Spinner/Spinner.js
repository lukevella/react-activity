import React from 'react';
import activityIndicator from '../activityIndicator';

const Spinner = React.createClass({
  render() {
    return (
      <div className="rai-spinner" {...this.props}>
        <div className="rai-spinner-outer" style={this.props.getBorderStyle()} />
        <div className="rai-spinner-inner" style={this.props.getBorderStyle()} />
      </div>
    );
  }
});

export default activityIndicator(Spinner, 0.6);
