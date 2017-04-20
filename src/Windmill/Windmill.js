import React from 'react';
import PropTypes from 'prop-types';
import activityIndicator from '../activityIndicator';

const animationDuration = 0.8;

const Windmill = (props) => {
  let windill = [];
  for (let i = 1; i <= props.count; i++) {
    const style = props.getFillStyle(i / ((props.count * 2) / animationDuration));
    windill.unshift(
      <div
        key={i}
        style={style}
      />
    )
  }
  return (
    <div style={props.style} className="rai-windill">
      {windill}
    </div>
  );
};

Windmill.propTypes = {
  count: PropTypes.number.isRequired,
};

Windmill.defaultProps = {
  count: 1,
};

export default activityIndicator(Windmill, animationDuration);
