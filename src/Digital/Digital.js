import React, {PropTypes} from 'react';
import activityIndicator from '../activityIndicator';

const Digital = React.createClass({
  propTypes: {
    count: PropTypes.number.isRequired
  },
  getDefaultProps() {
    return {
      count: 3
    }
  },
  render() {
    let rects = [];
    for (let i = 1; i <= this.props.count; i++) {
      rects.unshift(
        <div
          key={i}
          style={this.props.getFillStyle(i / 10)}
        />
      )
    }

    return (
      <div {...this.props} className="rai-digital">
        {rects}
      </div>
    );
  }
});

export default activityIndicator(Digital, 0.8);
