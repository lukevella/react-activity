import React from 'react';
import PropTypes from 'prop-types';
import activityIndicator from '../activityIndicator';

const Bounce = (props) => {
  let squares = [];
  for (let i = 1; i <= props.count; i++) {
    squares.unshift(
      <div
        key={i}
        style={props.getFillStyle(i / 10)}
      />
    )
  }
  return (
    <div style={props.style} className="rai-bounce">
      {squares}
    </div>
  );
};

Bounce.propTypes = {
  count: PropTypes.number.isRequired
}

Bounce.defaultProps = {
  count: 3
}

export default activityIndicator(Bounce, 0.8);
