'use strict';
import React, {PropTypes} from 'react';
import styles from './activityIndicator.scss';

export default (ComposedComponent, defaultProps) => {
  const ActivityIndicator = React.createClass({
    displayName: ComposedComponent.displayName,
    propTypes: {
      size: PropTypes.number,
      color: PropTypes.string,
      speed: PropTypes.number
    },
    getDefaultProps() {
      return defaultProps;
    },
    render() {
      const style = {};
      if (this.props.size) {
        // We adjust the size of the component by changing the font-size of the
        // outer container. Since all the measurements are in ems the component
        // scales accordingly.
        style.fontSize = this.props.size;
      }
      if (this.props.speed) {
        style.animationDuration = (defaultProps.animationDuration || 0.8) * (1 / this.props.speed) + 's';
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
