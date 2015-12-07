'use strict';
import React, {PropTypes} from 'react';
import styles from './activityIndicator.scss';

export default (ComposedComponent, defaultProps) => {
  const ActivityIndicator = React.createClass({
    propTypes: {
      size: PropTypes.number,
      color: PropTypes.string
    },
    getDefaultProps() {
      return defaultProps || {};
    },
    render() {
      const style = {};
      if (this.props.size) {
        // We adjust the size of the component by changing the font-size of the
        // outer container. Since all the measurements are in ems the component
        // scales accordingly.
        style.fontSize = this.props.size;
      }
      return (
        <div className={styles.activityIndicator} style={style}>
          <ComposedComponent {...this.props} />
        </div>
      );
    }
  });
  return ActivityIndicator;
}
