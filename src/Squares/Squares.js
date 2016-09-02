import React, {PropTypes} from 'react';
import activityIndicator from '../activityIndicator';

const Squares = React.createClass({
  propTypes: {
    squareCount: PropTypes.number.isRequired
  },
  getDefaultProps() {
    return {
      squareCount: 3
    }
  },
  render() {
    let squares = [];
    for (let i = 1; i <= this.props.squareCount; i++) {
      squares.unshift(
        <div
          key={i}
          className="rai-square"
          style={this.props.getFillStyle(i / 10)}
        />
      )
    }
    return (
      <div style={this.props.style} className="rai-squares">
        {squares}
      </div>
    );
  }
});

export default activityIndicator(Squares, 0.8);
