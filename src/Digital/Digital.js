import React from 'react';
import PropTypes from 'prop-types';
import activityIndicator from '../activityIndicator';

const Digital = (props) => {
  let rects = [];
  for (let i = 1; i <= props.count; i++) {
    rects.unshift(
      <div
        key={i}
        style={props.getFillStyle(i / 10)}
      />
    )
  }

  return (
    <div style={props.style} className="rai-digital">
      {rects}
    </div>
  );
};

Digital.propTypes = {
  count: PropTypes.number.isRequired,
};

Digital.defaultProps = {
  count: 3,
};

export default activityIndicator(Digital, 0.8);
