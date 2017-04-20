import React from 'react';
import PropTypes from 'prop-types';
import activityIndicator from '../activityIndicator';

const Squares = (props) => {
  let squares = [];
  for (let i = 1; i <= props.squareCount; i++) {
    squares.unshift(
      <div
        key={i}
        className="rai-square"
        style={props.getFillStyle(i / 10)}
      />
    )
  }
  return (
    <div style={props.style} className="rai-squares">
      {squares}
    </div>
  );
};

Squares.propTypes = {
  squareCount: PropTypes.number.isRequired,

};

Squares.defaultProps = {
  squareCount: 3,
};

export default activityIndicator(Squares, 0.8);
