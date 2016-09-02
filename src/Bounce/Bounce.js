import React, {PropTypes} from 'react';
import activityIndicator from '../activityIndicator';

const Bounce = React.createClass({
  propTypes: {
    count: PropTypes.number.isRequired
  },
  getDefaultProps() {
    return {
      count: 3
    }
  },
  render() {
    let squares = [];
    for (let i = 1; i <= this.props.count; i++) {
      squares.unshift(
        <div
          key={i}
          style={this.props.getFillStyle(i / 10)}
        />
      )
    }
    return (
      <div style={this.props.style} className="rai-bounce">
        {squares}
      </div>
    );
  }
});

export default activityIndicator(Bounce, 0.8);
