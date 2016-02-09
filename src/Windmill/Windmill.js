import React, {PropTypes} from 'react';
import activityIndicator from '../activityIndicator';

const animationDuration = 0.8;

const Windmill = React.createClass({
  propTypes: {
    count: PropTypes.number.isRequired
  },
  getDefaultProps() {
    return {
      count: 1
    }
  },
  render() {
    let windill = [];
    for (let i = 1; i <= this.props.count; i++) {
      const style = this.props.getFillStyle(i / ((this.props.count * 2) / animationDuration));
      windill.unshift(
        <div
          key={i}
          style={style}
        />
      )
    }
    return (
      <div {...this.props} className="rai-windill">
        {windill}
      </div>
    );
  }
});

export default activityIndicator(Windmill, animationDuration);
